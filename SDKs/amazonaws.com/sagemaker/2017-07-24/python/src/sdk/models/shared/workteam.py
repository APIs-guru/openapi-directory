from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import memberdefinition
from . import notificationconfiguration


@dataclass_json
@dataclass
class Workteam:
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    member_definitions: List[memberdefinition.MemberDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberDefinitions' }})
    notification_configuration: Optional[notificationconfiguration.NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfiguration' }})
    product_listing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductListingIds' }})
    sub_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubDomain' }})
    workforce_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkforceArn' }})
    workteam_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamArn' }})
    workteam_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamName' }})
    
