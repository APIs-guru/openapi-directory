from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ruleevaluationstatus_enum


@dataclass_json
@dataclass
class ProfilerRuleEvaluationStatus:
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rule_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleConfigurationName' }})
    rule_evaluation_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleEvaluationJobArn' }})
    rule_evaluation_status: Optional[ruleevaluationstatus_enum.RuleEvaluationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleEvaluationStatus' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    
