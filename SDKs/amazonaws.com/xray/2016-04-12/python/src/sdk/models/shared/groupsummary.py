from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import insightsconfiguration


@dataclass_json
@dataclass
class GroupSummary:
    filter_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterExpression' }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupARN' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    insights_configuration: Optional[insightsconfiguration.InsightsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightsConfiguration' }})
    
