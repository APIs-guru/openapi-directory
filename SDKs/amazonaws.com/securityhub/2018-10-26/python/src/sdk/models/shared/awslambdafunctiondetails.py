from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awslambdafunctioncode
from . import awslambdafunctiondeadletterconfig
from . import awslambdafunctionenvironment
from . import awslambdafunctionlayer
from . import awslambdafunctiontracingconfig
from . import awslambdafunctionvpcconfig


@dataclass_json
@dataclass
class AwsLambdaFunctionDetails:
    code: Optional[awslambdafunctioncode.AwsLambdaFunctionCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    code_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSha256' }})
    dead_letter_config: Optional[awslambdafunctiondeadletterconfig.AwsLambdaFunctionDeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeadLetterConfig' }})
    environment: Optional[awslambdafunctionenvironment.AwsLambdaFunctionEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handler' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified' }})
    layers: Optional[List[awslambdafunctionlayer.AwsLambdaFunctionLayer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Layers' }})
    master_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterArn' }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemorySize' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevisionId' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runtime' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    tracing_config: Optional[awslambdafunctiontracingconfig.AwsLambdaFunctionTracingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TracingConfig' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    vpc_config: Optional[awslambdafunctionvpcconfig.AwsLambdaFunctionVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
