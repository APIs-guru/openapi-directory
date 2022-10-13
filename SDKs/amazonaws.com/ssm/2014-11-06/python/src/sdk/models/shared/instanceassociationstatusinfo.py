from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceassociationoutputurl


@dataclass_json
@dataclass
class InstanceAssociationStatusInfo:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationName' }})
    association_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationVersion' }})
    detailed_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailedStatus' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionSummary' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output_url: Optional[instanceassociationoutputurl.InstanceAssociationOutputURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputUrl' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
