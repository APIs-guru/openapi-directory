from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRobotApplicationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateRobotApplicationRequestBodyEnvironment:
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UpdateRobotApplicationRequestBodyRobotSoftwareSuite:
    name: Optional[shared.RobotSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[shared.RobotSoftwareSuiteVersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class UpdateRobotApplicationRequestBody:
    application: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    current_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentRevisionId' }})
    environment: Optional[UpdateRobotApplicationRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    robot_software_suite: UpdateRobotApplicationRequestBodyRobotSoftwareSuite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotSoftwareSuite' }})
    sources: Optional[List[shared.SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    

@dataclass
class UpdateRobotApplicationRequest:
    headers: UpdateRobotApplicationHeaders = field(default=None)
    request: UpdateRobotApplicationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRobotApplicationResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_robot_application_response: Optional[shared.UpdateRobotApplicationResponse] = field(default=None)
    
