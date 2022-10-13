from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class LicenseConfigurationUsage:
    association_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consumed_licenses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedLicenses' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    resource_owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceOwnerId' }})
    resource_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceStatus' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
