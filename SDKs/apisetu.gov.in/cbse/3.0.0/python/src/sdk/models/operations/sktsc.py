from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SktscRequestBodyCertificateParameters:
    full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullName' }})
    rollno: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollno' }})
    year: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
class SktscRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class SktscRequestBody:
    certificate_parameters: Optional[SktscRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateParameters' }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifact' }})
    format: SktscRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    txn_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnId' }})
    

@dataclass
class SktscSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SktscRequest:
    request: Optional[SktscRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SktscSecurity = field(default=None)
    
class Sktsc400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Sktsc400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Sktsc400ApplicationJSON:
    error: Optional[Sktsc400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Sktsc400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Sktsc401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Sktsc401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Sktsc401ApplicationJSON:
    error: Optional[Sktsc401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Sktsc401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Sktsc404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Sktsc404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Sktsc404ApplicationJSON:
    error: Optional[Sktsc404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Sktsc404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Sktsc500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Sktsc500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Sktsc500ApplicationJSON:
    error: Optional[Sktsc500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Sktsc500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Sktsc502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Sktsc502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Sktsc502ApplicationJSON:
    error: Optional[Sktsc502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Sktsc502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Sktsc503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Sktsc503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Sktsc503ApplicationJSON:
    error: Optional[Sktsc503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Sktsc503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Sktsc504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Sktsc504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Sktsc504ApplicationJSON:
    error: Optional[Sktsc504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Sktsc504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    

@dataclass
class SktscResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sktsc_400_application_json_object: Optional[Sktsc400ApplicationJSON] = field(default=None)
    sktsc_401_application_json_object: Optional[Sktsc401ApplicationJSON] = field(default=None)
    sktsc_404_application_json_object: Optional[Sktsc404ApplicationJSON] = field(default=None)
    sktsc_500_application_json_object: Optional[Sktsc500ApplicationJSON] = field(default=None)
    sktsc_502_application_json_object: Optional[Sktsc502ApplicationJSON] = field(default=None)
    sktsc_503_application_json_object: Optional[Sktsc503ApplicationJSON] = field(default=None)
    sktsc_504_application_json_object: Optional[Sktsc504ApplicationJSON] = field(default=None)
    
