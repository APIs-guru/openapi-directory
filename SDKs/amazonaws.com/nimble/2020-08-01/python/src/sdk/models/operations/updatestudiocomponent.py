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
class UpdateStudioComponentPathParams:
    studio_component_id: str = field(metadata={'path_param': { 'field_name': 'studioComponentId', 'style': 'simple', 'explode': False }})
    studio_id: str = field(metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStudioComponentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Token', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateStudioComponentRequestBodyConfiguration:
    r"""UpdateStudioComponentRequestBodyConfiguration
    The configuration of the studio component, based on component type.
    """
    
    active_directory_configuration: Optional[shared.ActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectoryConfiguration') }})
    compute_farm_configuration: Optional[shared.ComputeFarmConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeFarmConfiguration') }})
    license_service_configuration: Optional[shared.LicenseServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseServiceConfiguration') }})
    shared_file_system_configuration: Optional[shared.SharedFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedFileSystemConfiguration') }})
    
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
    configuration: Optional[UpdateStudioComponentRequestBodyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ec2_security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2SecurityGroupIds') }})
    initialization_scripts: Optional[List[shared.StudioComponentInitializationScript]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationScripts') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script_parameters: Optional[List[shared.ScriptParameterKeyValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptParameters') }})
    subtype: Optional[UpdateStudioComponentRequestBodySubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    type: Optional[UpdateStudioComponentRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class UpdateStudioComponentRequest:
    headers: UpdateStudioComponentHeaders = field()
    path_params: UpdateStudioComponentPathParams = field()
    request: UpdateStudioComponentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStudioComponentResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_studio_component_response: Optional[shared.UpdateStudioComponentResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
