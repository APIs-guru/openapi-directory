from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DialogCodeHookSettings:
    r"""DialogCodeHookSettings
    Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
