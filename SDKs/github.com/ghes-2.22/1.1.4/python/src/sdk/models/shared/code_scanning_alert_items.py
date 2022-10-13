from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import code_scanning_alert_classification_enum
from . import simple_user
from . import code_scanning_alert_dismissed_reason_enum
from . import code_scanning_alert_instance
from . import code_scanning_alert_rule_summary
from . import code_scanning_alert_state_enum
from . import code_scanning_analysis_tool


@dataclass_json
@dataclass
class CodeScanningAlertItems:
    classification: code_scanning_alert_classification_enum.CodeScanningAlertClassificationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dismissed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dismissed_by: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissed_by' }})
    dismissed_reason: code_scanning_alert_dismissed_reason_enum.CodeScanningAlertDismissedReasonEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissed_reason' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    instance: code_scanning_alert_instance.CodeScanningAlertInstance = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    rule: code_scanning_alert_rule_summary.CodeScanningAlertRuleSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    state: code_scanning_alert_state_enum.CodeScanningAlertStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tool: code_scanning_analysis_tool.CodeScanningAnalysisTool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tool' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
