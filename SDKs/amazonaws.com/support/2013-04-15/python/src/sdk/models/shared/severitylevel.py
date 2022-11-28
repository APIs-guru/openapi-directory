from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SeverityLevel:
    r"""SeverityLevel
    A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href=\"https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity\">Choosing a severity</a> in the <i>AWS Support User Guide</i>.
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
