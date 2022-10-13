from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import awssecurityfindingfilters


@dataclass_json
@dataclass
class Insight:
    filters: awssecurityfindingfilters.AwsSecurityFindingFilters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    group_by_attribute: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByAttribute' }})
    insight_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
