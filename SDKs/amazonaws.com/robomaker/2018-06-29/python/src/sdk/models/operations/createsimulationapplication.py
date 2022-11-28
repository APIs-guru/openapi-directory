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
    r"""CreateSimulationApplicationRequestBodyEnvironment
    The object that contains the Docker image URI for either your robot or simulation applications.
    """
    
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBodyRenderingEngine:
    r"""CreateSimulationApplicationRequestBodyRenderingEngine
    Information about a rendering engine.
    """
    
    name: Optional[shared.RenderingEngineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBodyRobotSoftwareSuite:
    r"""CreateSimulationApplicationRequestBodyRobotSoftwareSuite
    Information about a robot software suite (ROS distribution).
    """
    
    name: Optional[shared.RobotSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[shared.RobotSoftwareSuiteVersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBodySimulationSoftwareSuite:
    r"""CreateSimulationApplicationRequestBodySimulationSoftwareSuite
    Information about a simulation software suite.
    """
    
    name: Optional[shared.SimulationSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class CreateSimulationApplicationRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    robot_software_suite: CreateSimulationApplicationRequestBodyRobotSoftwareSuite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotSoftwareSuite') }})
    simulation_software_suite: CreateSimulationApplicationRequestBodySimulationSoftwareSuite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationSoftwareSuite') }})
    environment: Optional[CreateSimulationApplicationRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    rendering_engine: Optional[CreateSimulationApplicationRequestBodyRenderingEngine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingEngine') }})
    sources: Optional[List[shared.SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateSimulationApplicationRequest:
    headers: CreateSimulationApplicationHeaders = field()
    request: CreateSimulationApplicationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSimulationApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    create_simulation_application_response: Optional[shared.CreateSimulationApplicationResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
