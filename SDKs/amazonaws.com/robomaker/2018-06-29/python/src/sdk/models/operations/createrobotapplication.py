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
class CreateRobotApplicationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateRobotApplicationRequestBodyEnvironment:
    r"""CreateRobotApplicationRequestBodyEnvironment
    The object that contains the Docker image URI for either your robot or simulation applications.
    """
    
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CreateRobotApplicationRequestBodyRobotSoftwareSuite:
    r"""CreateRobotApplicationRequestBodyRobotSoftwareSuite
    Information about a robot software suite (ROS distribution).
    """
    
    name: Optional[shared.RobotSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[shared.RobotSoftwareSuiteVersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class CreateRobotApplicationRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    robot_software_suite: CreateRobotApplicationRequestBodyRobotSoftwareSuite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotSoftwareSuite') }})
    environment: Optional[CreateRobotApplicationRequestBodyEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    sources: Optional[List[shared.SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateRobotApplicationRequest:
    headers: CreateRobotApplicationHeaders = field()
    request: CreateRobotApplicationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRobotApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    create_robot_application_response: Optional[shared.CreateRobotApplicationResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
