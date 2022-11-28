from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsLambdaFunctionDetails:
    r"""AwsLambdaFunctionDetails
    Details about a function's configuration.
    """
    
    code: Optional[AwsLambdaFunctionCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    code_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSha256') }})
    dead_letter_config: Optional[AwsLambdaFunctionDeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterConfig') }})
    environment: Optional[AwsLambdaFunctionEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    layers: Optional[List[AwsLambdaFunctionLayer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    master_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterArn') }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemorySize') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevisionId') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runtime') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    tracing_config: Optional[AwsLambdaFunctionTracingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TracingConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    vpc_config: Optional[AwsLambdaFunctionVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
