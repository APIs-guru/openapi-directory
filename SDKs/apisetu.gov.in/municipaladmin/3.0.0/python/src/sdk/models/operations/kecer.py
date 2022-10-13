from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KecerRequestBodyCertificateParameters:
    document_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentNumber' }})
    
class KecerRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class KecerRequestBody:
    certificate_parameters: Optional[KecerRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateParameters' }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifact' }})
    format: KecerRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    txn_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnId' }})
    

@dataclass
class KecerSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class KecerRequest:
    request: Optional[KecerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: KecerSecurity = field(default=None)
    
class Kecer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Kecer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Kecer400ApplicationJSON:
    error: Optional[Kecer400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Kecer400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Kecer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Kecer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Kecer401ApplicationJSON:
    error: Optional[Kecer401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Kecer401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Kecer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Kecer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Kecer404ApplicationJSON:
    error: Optional[Kecer404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Kecer404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Kecer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Kecer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Kecer500ApplicationJSON:
    error: Optional[Kecer500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Kecer500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Kecer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Kecer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Kecer502ApplicationJSON:
    error: Optional[Kecer502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Kecer502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Kecer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Kecer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Kecer503ApplicationJSON:
    error: Optional[Kecer503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Kecer503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Kecer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Kecer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Kecer504ApplicationJSON:
    error: Optional[Kecer504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Kecer504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    

@dataclass
class KecerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    kecer_400_application_json_object: Optional[Kecer400ApplicationJSON] = field(default=None)
    kecer_401_application_json_object: Optional[Kecer401ApplicationJSON] = field(default=None)
    kecer_404_application_json_object: Optional[Kecer404ApplicationJSON] = field(default=None)
    kecer_500_application_json_object: Optional[Kecer500ApplicationJSON] = field(default=None)
    kecer_502_application_json_object: Optional[Kecer502ApplicationJSON] = field(default=None)
    kecer_503_application_json_object: Optional[Kecer503ApplicationJSON] = field(default=None)
    kecer_504_application_json_object: Optional[Kecer504ApplicationJSON] = field(default=None)
    
