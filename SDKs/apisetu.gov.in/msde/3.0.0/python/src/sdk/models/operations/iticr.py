from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IticrRequestBodyCertificateParameters:
    full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullName' }})
    certno: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certno' }})
    
class IticrRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class IticrRequestBody:
    certificate_parameters: Optional[IticrRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateParameters' }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifact' }})
    format: IticrRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    txn_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnId' }})
    

@dataclass
class IticrSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class IticrRequest:
    request: Optional[IticrRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: IticrSecurity = field(default=None)
    
class Iticr400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Iticr400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Iticr400ApplicationJSON:
    error: Optional[Iticr400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Iticr400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Iticr401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Iticr401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Iticr401ApplicationJSON:
    error: Optional[Iticr401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Iticr401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Iticr404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Iticr404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Iticr404ApplicationJSON:
    error: Optional[Iticr404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Iticr404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Iticr500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Iticr500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Iticr500ApplicationJSON:
    error: Optional[Iticr500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Iticr500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Iticr502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Iticr502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Iticr502ApplicationJSON:
    error: Optional[Iticr502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Iticr502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Iticr503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Iticr503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Iticr503ApplicationJSON:
    error: Optional[Iticr503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Iticr503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Iticr504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Iticr504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Iticr504ApplicationJSON:
    error: Optional[Iticr504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Iticr504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    

@dataclass
class IticrResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    iticr_400_application_json_object: Optional[Iticr400ApplicationJSON] = field(default=None)
    iticr_401_application_json_object: Optional[Iticr401ApplicationJSON] = field(default=None)
    iticr_404_application_json_object: Optional[Iticr404ApplicationJSON] = field(default=None)
    iticr_500_application_json_object: Optional[Iticr500ApplicationJSON] = field(default=None)
    iticr_502_application_json_object: Optional[Iticr502ApplicationJSON] = field(default=None)
    iticr_503_application_json_object: Optional[Iticr503ApplicationJSON] = field(default=None)
    iticr_504_application_json_object: Optional[Iticr504ApplicationJSON] = field(default=None)
    
