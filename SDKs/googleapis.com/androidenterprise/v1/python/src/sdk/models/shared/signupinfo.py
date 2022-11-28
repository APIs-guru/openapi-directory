from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SignupInfo:
    r"""SignupInfo
    A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
    """
    
    completion_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionToken') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
