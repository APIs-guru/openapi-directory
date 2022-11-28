from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Principal:
    r"""Principal
    The IAM principal that you allowing or denying access to an Amazon Lex action. You must provide a <code>service</code> or an <code>arn</code>, but not both in the same statement. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html\"> AWS JSON policy elements: Principal </a>.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
