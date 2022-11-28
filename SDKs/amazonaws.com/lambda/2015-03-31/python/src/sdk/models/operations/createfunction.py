from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateFunctionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyCode:
    r"""CreateFunctionRequestBodyCode
    The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
    """
    
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUri') }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Key') }})
    s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ObjectVersion') }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFile') }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyDeadLetterConfig:
    r"""CreateFunctionRequestBodyDeadLetterConfig
    The <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq\">dead-letter queue</a> for failed asynchronous invocations.
    """
    
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetArn') }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyEnvironment:
    r"""CreateFunctionRequestBodyEnvironment
    A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. 
    """
    
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyImageConfig:
    r"""CreateFunctionRequestBodyImageConfig
    Configuration values that override the container image Dockerfile settings. See <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms\">Container settings</a>. 
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntryPoint') }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkingDirectory') }})
    
class CreateFunctionRequestBodyPackageTypeEnum(str, Enum):
    ZIP = "Zip"
    IMAGE = "Image"

class CreateFunctionRequestBodyRuntimeEnum(str, Enum):
    NODEJS = "nodejs"
    NODEJS4_3 = "nodejs4.3"
    NODEJS6_10 = "nodejs6.10"
    NODEJS8_10 = "nodejs8.10"
    NODEJS10_X = "nodejs10.x"
    NODEJS12_X = "nodejs12.x"
    NODEJS14_X = "nodejs14.x"
    JAVA8 = "java8"
    JAVA8_AL2 = "java8.al2"
    JAVA11 = "java11"
    PYTHON2_7 = "python2.7"
    PYTHON3_6 = "python3.6"
    PYTHON3_7 = "python3.7"
    PYTHON3_8 = "python3.8"
    PYTHON3_9 = "python3.9"
    DOTNETCORE1_0 = "dotnetcore1.0"
    DOTNETCORE2_0 = "dotnetcore2.0"
    DOTNETCORE2_1 = "dotnetcore2.1"
    DOTNETCORE3_1 = "dotnetcore3.1"
    NODEJS4_3_EDGE = "nodejs4.3-edge"
    GO1_X = "go1.x"
    RUBY2_5 = "ruby2.5"
    RUBY2_7 = "ruby2.7"
    PROVIDED = "provided"
    PROVIDED_AL2 = "provided.al2"


@dataclass_json
@dataclass
class CreateFunctionRequestBodyTracingConfig:
    r"""CreateFunctionRequestBodyTracingConfig
    The function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html\">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
    """
    
    mode: Optional[shared.TracingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyVpcConfig:
    r"""CreateFunctionRequestBodyVpcConfig
    The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html\">VPC Settings</a>.
    """
    
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBody:
    code: CreateFunctionRequestBodyCode = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    function_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    code_signing_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigArn') }})
    dead_letter_config: Optional[CreateFunctionRequestBodyDeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    environment: Optional[CreateFunctionRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    file_system_configs: Optional[List[shared.FileSystemConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemConfigs') }})
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    image_config: Optional[CreateFunctionRequestBodyImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageConfig') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyArn') }})
    layers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemorySize') }})
    package_type: Optional[CreateFunctionRequestBodyPackageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageType') }})
    publish: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publish') }})
    runtime: Optional[CreateFunctionRequestBodyRuntimeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runtime') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    tracing_config: Optional[CreateFunctionRequestBodyTracingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TracingConfig') }})
    vpc_config: Optional[CreateFunctionRequestBodyVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    

@dataclass
class CreateFunctionRequest:
    headers: CreateFunctionHeaders = field()
    request: CreateFunctionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFunctionResponse:
    content_type: str = field()
    status_code: int = field()
    code_signing_config_not_found_exception: Optional[Any] = field(default=None)
    code_storage_exceeded_exception: Optional[Any] = field(default=None)
    code_verification_failed_exception: Optional[Any] = field(default=None)
    function_configuration: Optional[shared.FunctionConfiguration] = field(default=None)
    invalid_code_signature_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
