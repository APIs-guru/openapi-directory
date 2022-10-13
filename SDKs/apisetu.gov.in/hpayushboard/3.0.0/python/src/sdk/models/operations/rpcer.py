from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RpcerRequestBodyCertificateParameters:
    full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullName' }})
    registration_no: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrationNo' }})
    
class RpcerRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class RpcerRequestBody:
    certificate_parameters: Optional[RpcerRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateParameters' }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifact' }})
    format: RpcerRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    txn_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnId' }})
    

@dataclass
class RpcerSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RpcerRequest:
    request: Optional[RpcerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RpcerSecurity = field(default=None)
    
class Rpcer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Rpcer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Rpcer400ApplicationJSON:
    error: Optional[Rpcer400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Rpcer400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Rpcer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Rpcer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Rpcer401ApplicationJSON:
    error: Optional[Rpcer401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Rpcer401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Rpcer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Rpcer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Rpcer404ApplicationJSON:
    error: Optional[Rpcer404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Rpcer404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Rpcer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Rpcer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Rpcer500ApplicationJSON:
    error: Optional[Rpcer500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Rpcer500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Rpcer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Rpcer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Rpcer502ApplicationJSON:
    error: Optional[Rpcer502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Rpcer502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Rpcer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Rpcer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Rpcer503ApplicationJSON:
    error: Optional[Rpcer503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Rpcer503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Rpcer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Rpcer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Rpcer504ApplicationJSON:
    error: Optional[Rpcer504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Rpcer504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    

@dataclass
class RpcerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    rpcer_400_application_json_object: Optional[Rpcer400ApplicationJSON] = field(default=None)
    rpcer_401_application_json_object: Optional[Rpcer401ApplicationJSON] = field(default=None)
    rpcer_404_application_json_object: Optional[Rpcer404ApplicationJSON] = field(default=None)
    rpcer_500_application_json_object: Optional[Rpcer500ApplicationJSON] = field(default=None)
    rpcer_502_application_json_object: Optional[Rpcer502ApplicationJSON] = field(default=None)
    rpcer_503_application_json_object: Optional[Rpcer503ApplicationJSON] = field(default=None)
    rpcer_504_application_json_object: Optional[Rpcer504ApplicationJSON] = field(default=None)
    
