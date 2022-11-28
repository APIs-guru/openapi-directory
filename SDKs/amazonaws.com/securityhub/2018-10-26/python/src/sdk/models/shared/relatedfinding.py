from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelatedFinding:
    r"""RelatedFinding
    Details about a related finding.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    product_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductArn') }})
    
