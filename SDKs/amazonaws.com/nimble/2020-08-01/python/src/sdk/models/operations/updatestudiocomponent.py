from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateStudioComponentPathParams:
    studio_component_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studioComponentId', 'style': 'simple', 'explode': False }})
    studio_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStudioComponentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Token' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateStudioComponentRequestBodyConfiguration:
    active_directory_configuration: Optional[shared.ActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDirectoryConfiguration' }})
    compute_farm_configuration: Optional[shared.ComputeFarmConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeFarmConfiguration' }})
    license_service_configuration: Optional[shared.LicenseServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseServiceConfiguration' }})
    shared_file_system_configuration: Optional[shared.SharedFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedFileSystemConfiguration' }})
    
class UpdateStudioComponentRequestBodySubtypeEnum(str, Enum):
    AWS_MANAGED_MICROSOFT_AD = "AWS_MANAGED_MICROSOFT_AD"
    AMAZON_FSX_FOR_WINDOWS = "AMAZON_FSX_FOR_WINDOWS"
    AMAZON_FSX_FOR_LUSTRE = "AMAZON_FSX_FOR_LUSTRE"
    CUSTOM = "CUSTOM"

class UpdateStudioComponentRequestBodyTypeEnum(str, Enum):
    ACTIVE_DIRECTORY = "ACTIVE_DIRECTORY"
    SHARED_FILE_SYSTEM = "SHARED_FILE_SYSTEM"
    COMPUTE_FARM = "COMPUTE_FARM"
    LICENSE_SERVICE = "LICENSE_SERVICE"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class UpdateStudioComponentRequestBody:
    configuration: Optional[UpdateStudioComponentRequestBodyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ec2_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SecurityGroupIds' }})
    initialization_scripts: Optional[List[shared.StudioComponentInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializationScripts' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script_parameters: Optional[List[shared.ScriptParameterKeyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptParameters' }})
    subtype: Optional[UpdateStudioComponentRequestBodySubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    type: Optional[UpdateStudioComponentRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class UpdateStudioComponentRequest:
    path_params: UpdateStudioComponentPathParams = field(default=None)
    headers: UpdateStudioComponentHeaders = field(default=None)
    request: UpdateStudioComponentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStudioComponentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_studio_component_response: Optional[shared.UpdateStudioComponentResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
