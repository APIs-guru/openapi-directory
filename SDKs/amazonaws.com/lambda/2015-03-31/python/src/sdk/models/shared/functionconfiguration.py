from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionConfiguration:
    r"""FunctionConfiguration
    Details about a function's configuration.
    """
    
    code_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSha256') }})
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSize') }})
    dead_letter_config: Optional[DeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    environment: Optional[EnvironmentResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    file_system_configs: Optional[List[FileSystemConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemConfigs') }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionArn') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    image_config_response: Optional[ImageConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageConfigResponse') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyArn') }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    last_update_status: Optional[LastUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatus') }})
    last_update_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatusReason') }})
    last_update_status_reason_code: Optional[LastUpdateStatusReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatusReasonCode') }})
    layers: Optional[List[Layer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    master_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterArn') }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemorySize') }})
    package_type: Optional[PackageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageType') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevisionId') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    runtime: Optional[RuntimeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runtime') }})
    signing_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningJobArn') }})
    signing_profile_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningProfileVersionArn') }})
    state: Optional[StateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReason') }})
    state_reason_code: Optional[StateReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReasonCode') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    tracing_config: Optional[TracingConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TracingConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    vpc_config: Optional[VpcConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
