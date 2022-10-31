from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLaunchConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum(str, Enum):
    STOPPED = "STOPPED"
    STARTED = "STARTED"


@dataclass_json
@dataclass
class UpdateLaunchConfigurationRequestBodyLicensing:
    os_byol: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osByol' }})
    
class UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum(str, Enum):
    NONE = "NONE"
    BASIC = "BASIC"


@dataclass_json
@dataclass
class UpdateLaunchConfigurationRequestBody:
    copy_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyPrivateIp' }})
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyTags' }})
    launch_disposition: Optional[UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchDisposition' }})
    licensing: Optional[UpdateLaunchConfigurationRequestBodyLicensing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensing' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerID' }})
    target_instance_type_right_sizing_method: Optional[UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetInstanceTypeRightSizingMethod' }})
    

@dataclass
class UpdateLaunchConfigurationRequest:
    headers: UpdateLaunchConfigurationHeaders = field(default=None)
    request: UpdateLaunchConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLaunchConfigurationResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    launch_configuration: Optional[shared.LaunchConfiguration] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    uninitialized_account_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
