from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsIamAccessKeySessionContext:
    r"""AwsIamAccessKeySessionContext
    Provides information about the session that the key was used for.
    """
    
    attributes: Optional[AwsIamAccessKeySessionContextAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    session_issuer: Optional[AwsIamAccessKeySessionContextSessionIssuer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionIssuer') }})
    
