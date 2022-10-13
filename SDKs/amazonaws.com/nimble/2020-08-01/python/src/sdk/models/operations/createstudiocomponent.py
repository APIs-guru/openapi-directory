from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateStudioComponentPathParams:
    studio_id: str = field(default=None, metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStudioComponentHeaders:
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
class CreateStudioComponentRequestBodyConfiguration:
    active_directory_configuration: Optional[shared.ActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDirectoryConfiguration' }})
    compute_farm_configuration: Optional[shared.ComputeFarmConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeFarmConfiguration' }})
    license_service_configuration: Optional[shared.LicenseServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseServiceConfiguration' }})
    shared_file_system_configuration: Optional[shared.SharedFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedFileSystemConfiguration' }})
    
class CreateStudioComponentRequestBodySubtypeEnum(str, Enum):
    AWS_MANAGED_MICROSOFT_AD = "AWS_MANAGED_MICROSOFT_AD"
    AMAZON_FSX_FOR_WINDOWS = "AMAZON_FSX_FOR_WINDOWS"
    AMAZON_FSX_FOR_LUSTRE = "AMAZON_FSX_FOR_LUSTRE"
    CUSTOM = "CUSTOM"

class CreateStudioComponentRequestBodyTypeEnum(str, Enum):
    ACTIVE_DIRECTORY = "ACTIVE_DIRECTORY"
    SHARED_FILE_SYSTEM = "SHARED_FILE_SYSTEM"
    COMPUTE_FARM = "COMPUTE_FARM"
    LICENSE_SERVICE = "LICENSE_SERVICE"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class CreateStudioComponentRequestBody:
    configuration: Optional[CreateStudioComponentRequestBodyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ec2_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SecurityGroupIds' }})
    initialization_scripts: Optional[List[shared.StudioComponentInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializationScripts' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script_parameters: Optional[List[shared.ScriptParameterKeyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptParameters' }})
    subtype: Optional[CreateStudioComponentRequestBodySubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: CreateStudioComponentRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateStudioComponentRequest:
    path_params: CreateStudioComponentPathParams = field(default=None)
    headers: CreateStudioComponentHeaders = field(default=None)
    request: CreateStudioComponentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStudioComponentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_studio_component_response: Optional[shared.CreateStudioComponentResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
