from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deadletterconfig
from . import environmentresponse
from . import filesystemconfig
from . import imageconfigresponse
from . import lastupdatestatus_enum
from . import lastupdatestatusreasoncode_enum
from . import layer
from . import packagetype_enum
from . import runtime_enum
from . import state_enum
from . import statereasoncode_enum
from . import tracingconfigresponse
from . import vpcconfigresponse


@dataclass_json
@dataclass
class FunctionConfiguration:
    code_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSha256' }})
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSize' }})
    dead_letter_config: Optional[deadletterconfig.DeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeadLetterConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    environment: Optional[environmentresponse.EnvironmentResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    file_system_configs: Optional[List[filesystemconfig.FileSystemConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemConfigs' }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionArn' }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handler' }})
    image_config_response: Optional[imageconfigresponse.ImageConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageConfigResponse' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyArn' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified' }})
    last_update_status: Optional[lastupdatestatus_enum.LastUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateStatus' }})
    last_update_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateStatusReason' }})
    last_update_status_reason_code: Optional[lastupdatestatusreasoncode_enum.LastUpdateStatusReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateStatusReasonCode' }})
    layers: Optional[List[layer.Layer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Layers' }})
    master_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterArn' }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemorySize' }})
    package_type: Optional[packagetype_enum.PackageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageType' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevisionId' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    runtime: Optional[runtime_enum.RuntimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runtime' }})
    signing_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningJobArn' }})
    signing_profile_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningProfileVersionArn' }})
    state: Optional[state_enum.StateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    state_reason_code: Optional[statereasoncode_enum.StateReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReasonCode' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    tracing_config: Optional[tracingconfigresponse.TracingConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TracingConfig' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    vpc_config: Optional[vpcconfigresponse.VpcConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
