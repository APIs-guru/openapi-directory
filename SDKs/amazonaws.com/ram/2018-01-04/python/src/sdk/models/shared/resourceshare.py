from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcesharefeatureset_enum
from . import resourcesharestatus_enum
from . import tag


@dataclass_json
@dataclass
class ResourceShare:
    allow_external_principals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowExternalPrincipals' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    feature_set: Optional[resourcesharefeatureset_enum.ResourceShareFeatureSetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureSet' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owning_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owningAccountId' }})
    resource_share_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArn' }})
    status: Optional[resourcesharestatus_enum.ResourceShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
