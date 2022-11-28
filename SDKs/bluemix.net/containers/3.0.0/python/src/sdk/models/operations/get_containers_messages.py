from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetContainersMessagesHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetContainersMessages200ApplicationJSON:
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_date') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetContainersMessagesRequest:
    headers: GetContainersMessagesHeaders = field()
    

@dataclass
class GetContainersMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    get_containers_messages_200_application_json_object: Optional[GetContainersMessages200ApplicationJSON] = field(default=None)
    
