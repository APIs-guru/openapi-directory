from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSimulationApplicationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBodyEnvironment:
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBodyRenderingEngine:
    name: Optional[shared.RenderingEngineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBodyRobotSoftwareSuite:
    name: Optional[shared.RobotSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[shared.RobotSoftwareSuiteVersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBodySimulationSoftwareSuite:
    name: Optional[shared.SimulationSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBody:
    environment: Optional[CreateSimulationApplicationRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rendering_engine: Optional[CreateSimulationApplicationRequestBodyRenderingEngine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderingEngine' }})
    robot_software_suite: CreateSimulationApplicationRequestBodyRobotSoftwareSuite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotSoftwareSuite' }})
    simulation_software_suite: CreateSimulationApplicationRequestBodySimulationSoftwareSuite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationSoftwareSuite' }})
    sources: Optional[List[shared.SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateSimulationApplicationRequest:
    headers: CreateSimulationApplicationHeaders = field(default=None)
    request: CreateSimulationApplicationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSimulationApplicationResponse:
    content_type: str = field(default=None)
    create_simulation_application_response: Optional[shared.CreateSimulationApplicationResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
