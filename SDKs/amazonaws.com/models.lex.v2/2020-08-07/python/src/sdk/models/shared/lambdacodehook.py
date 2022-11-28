from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaCodeHook:
    r"""LambdaCodeHook
    Specifies a Lambda function that verifies requests to a bot or fulfilles the user's request to a bot.
    """
    
    code_hook_interface_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeHookInterfaceVersion') }})
    lambda_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaARN') }})
    
