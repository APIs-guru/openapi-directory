from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import associationedgetype_enum
from . import usercontext


@dataclass_json
@dataclass
class AssociationSummary:
    association_type: Optional[associationedgetype_enum.AssociationEdgeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationType' }})
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationArn' }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationName' }})
    destination_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationType' }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceName' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
