from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import flowdefinitionstatus_enum


@dataclass_json
@dataclass
class FlowDefinitionSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    flow_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionArn' }})
    flow_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionName' }})
    flow_definition_status: flowdefinitionstatus_enum.FlowDefinitionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionStatus' }})
    
