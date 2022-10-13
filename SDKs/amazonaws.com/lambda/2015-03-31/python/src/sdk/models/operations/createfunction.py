from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateFunctionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyCode:
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUri' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Key' }})
    s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ObjectVersion' }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFile' }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyDeadLetterConfig:
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetArn' }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyEnvironment:
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variables' }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyImageConfig:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Command' }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntryPoint' }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkingDirectory' }})
    
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
    mode: Optional[shared.TracingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBodyVpcConfig:
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    

@dataclass_json
@dataclass
class CreateFunctionRequestBody:
    code: CreateFunctionRequestBodyCode = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    code_signing_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningConfigArn' }})
    dead_letter_config: Optional[CreateFunctionRequestBodyDeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeadLetterConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    environment: Optional[CreateFunctionRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    file_system_configs: Optional[List[shared.FileSystemConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemConfigs' }})
    function_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handler' }})
    image_config: Optional[CreateFunctionRequestBodyImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageConfig' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyArn' }})
    layers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Layers' }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemorySize' }})
    package_type: Optional[CreateFunctionRequestBodyPackageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageType' }})
    publish: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publish' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    runtime: Optional[CreateFunctionRequestBodyRuntimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runtime' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    tracing_config: Optional[CreateFunctionRequestBodyTracingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TracingConfig' }})
    vpc_config: Optional[CreateFunctionRequestBodyVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    

@dataclass
class CreateFunctionRequest:
    headers: CreateFunctionHeaders = field(default=None)
    request: CreateFunctionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFunctionResponse:
    code_signing_config_not_found_exception: Optional[Any] = field(default=None)
    code_storage_exceeded_exception: Optional[Any] = field(default=None)
    code_verification_failed_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    function_configuration: Optional[shared.FunctionConfiguration] = field(default=None)
    invalid_code_signature_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
