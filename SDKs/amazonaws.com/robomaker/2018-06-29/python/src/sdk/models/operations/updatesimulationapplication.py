from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSimulationApplicationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateSimulationApplicationRequestBodyEnvironment:
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class UpdateSimulationApplicationRequestBodyRenderingEngine:
    name: Optional[shared.RenderingEngineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class UpdateSimulationApplicationRequestBodyRobotSoftwareSuite:
    name: Optional[shared.RobotSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[shared.RobotSoftwareSuiteVersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class UpdateSimulationApplicationRequestBodySimulationSoftwareSuite:
    name: Optional[shared.SimulationSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class UpdateSimulationApplicationRequestBody:
    application: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    current_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentRevisionId' }})
    environment: Optional[UpdateSimulationApplicationRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    rendering_engine: Optional[UpdateSimulationApplicationRequestBodyRenderingEngine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderingEngine' }})
    robot_software_suite: UpdateSimulationApplicationRequestBodyRobotSoftwareSuite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotSoftwareSuite' }})
    simulation_software_suite: UpdateSimulationApplicationRequestBodySimulationSoftwareSuite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationSoftwareSuite' }})
    sources: Optional[List[shared.SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    

@dataclass
class UpdateSimulationApplicationRequest:
    headers: UpdateSimulationApplicationHeaders = field(default=None)
    request: UpdateSimulationApplicationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSimulationApplicationResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_simulation_application_response: Optional[shared.UpdateSimulationApplicationResponse] = field(default=None)
    
