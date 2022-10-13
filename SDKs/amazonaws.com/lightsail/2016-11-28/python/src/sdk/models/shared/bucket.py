from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessrules
from . import resourcelocation
from . import resourcereceivingaccess
from . import bucketstate
from . import tag


@dataclass_json
@dataclass
class Bucket:
    able_to_update_bundle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ableToUpdateBundle' }})
    access_rules: Optional[accessrules.AccessRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessRules' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_versioning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersioning' }})
    readonly_access_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonlyAccessAccounts' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    resources_receiving_access: Optional[List[resourcereceivingaccess.ResourceReceivingAccess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesReceivingAccess' }})
    state: Optional[bucketstate.BucketState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
