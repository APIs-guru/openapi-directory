from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams:
    fingerprint: str = field(metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON:
    message: Optional[DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest:
    path_params: DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams = field()
    

@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse:
    content_type: str = field()
    status_code: int = field()
    delete_project_username_project_checkout_key_fingerprint_200_application_json_object: Optional[DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON] = field(default=None)
    
