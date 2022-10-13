from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourceshareassociationtype_enum
from . import resourceshareassociationstatus_enum


@dataclass_json
@dataclass
class ResourceShareAssociation:
    associated_entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedEntity' }})
    association_type: Optional[resourceshareassociationtype_enum.ResourceShareAssociationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_share_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArn' }})
    resource_share_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareName' }})
    status: Optional[resourceshareassociationstatus_enum.ResourceShareAssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    
