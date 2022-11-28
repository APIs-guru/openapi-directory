from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InsightResultValue:
    r"""InsightResultValue
    The insight result values returned by the <code>GetInsightResults</code> operation.
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    group_by_attribute_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttributeValue') }})
    
