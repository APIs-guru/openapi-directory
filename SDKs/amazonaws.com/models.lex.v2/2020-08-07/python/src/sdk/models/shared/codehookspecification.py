from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeHookSpecification:
    r"""CodeHookSpecification
    Contains information about code hooks that Amazon Lex calls during a conversation.
    """
    
    lambda_code_hook: LambdaCodeHook = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaCodeHook') }})
    
