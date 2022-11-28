from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DebugRuleEvaluationStatus:
    r"""DebugRuleEvaluationStatus
    Information about the status of the rule evaluation.
    """
    
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rule_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfigurationName') }})
    rule_evaluation_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleEvaluationJobArn') }})
    rule_evaluation_status: Optional[RuleEvaluationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleEvaluationStatus') }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetails') }})
    
