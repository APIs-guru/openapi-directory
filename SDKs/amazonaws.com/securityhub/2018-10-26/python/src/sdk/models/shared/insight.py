from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Insight:
    r"""Insight
    Contains information about a Security Hub insight.
    """
    
    filters: AwsSecurityFindingFilters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_attribute: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttribute') }})
    insight_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightArn') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
