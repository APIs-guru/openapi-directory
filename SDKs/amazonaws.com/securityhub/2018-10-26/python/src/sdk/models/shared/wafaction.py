from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WafAction:
    r"""WafAction
    Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule. 
    """
    
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
