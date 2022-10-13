from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams:
    fingerprint: str = field(default=None, metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest:
    path_params: DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams = field(default=None)
    
class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON:
    message: Optional[DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse:
    content_type: str = field(default=None)
    delete_project_username_project_checkout_key_fingerprint_200_application_json_object: Optional[DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
