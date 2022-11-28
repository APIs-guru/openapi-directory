from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeHook:
    r"""CodeHook
    Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
    """
    
    message_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageVersion') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
