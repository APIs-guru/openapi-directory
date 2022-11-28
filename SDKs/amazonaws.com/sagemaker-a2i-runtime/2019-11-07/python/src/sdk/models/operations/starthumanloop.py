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
class StartHumanLoopHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartHumanLoopRequestBodyDataAttributes:
    r"""StartHumanLoopRequestBodyDataAttributes
    Attributes of the data specified by the customer. Use these to describe the data to be labeled.
    """
    
    content_classifiers: Optional[List[shared.ContentClassifierEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentClassifiers') }})
    

@dataclass_json
@dataclass
class StartHumanLoopRequestBodyHumanLoopInput:
    r"""StartHumanLoopRequestBodyHumanLoopInput
    An object containing the human loop input in JSON format.
    """
    
    input_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputContent') }})
    

@dataclass_json
@dataclass
class StartHumanLoopRequestBody:
    flow_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    human_loop_input: StartHumanLoopRequestBodyHumanLoopInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopInput') }})
    human_loop_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopName') }})
    data_attributes: Optional[StartHumanLoopRequestBodyDataAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAttributes') }})
    

@dataclass
class StartHumanLoopRequest:
    headers: StartHumanLoopHeaders = field()
    request: StartHumanLoopRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartHumanLoopResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    start_human_loop_response: Optional[shared.StartHumanLoopResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
