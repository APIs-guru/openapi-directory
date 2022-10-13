from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DgcerRequestBodyCertificateParameters:
    cname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CNAME' }})
    rroll: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RROLL' }})
    year: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YEAR' }})
    
class DgcerRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class DgcerRequestBody:
    certificate_parameters: Optional[DgcerRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateParameters' }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifact' }})
    format: DgcerRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    txn_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnId' }})
    

@dataclass
class DgcerSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DgcerRequest:
    request: Optional[DgcerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DgcerSecurity = field(default=None)
    
class Dgcer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Dgcer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Dgcer400ApplicationJSON:
    error: Optional[Dgcer400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Dgcer400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Dgcer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Dgcer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Dgcer401ApplicationJSON:
    error: Optional[Dgcer401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Dgcer401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Dgcer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Dgcer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Dgcer404ApplicationJSON:
    error: Optional[Dgcer404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Dgcer404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Dgcer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Dgcer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Dgcer500ApplicationJSON:
    error: Optional[Dgcer500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Dgcer500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Dgcer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Dgcer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Dgcer502ApplicationJSON:
    error: Optional[Dgcer502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Dgcer502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Dgcer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Dgcer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Dgcer503ApplicationJSON:
    error: Optional[Dgcer503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Dgcer503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class Dgcer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Dgcer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Dgcer504ApplicationJSON:
    error: Optional[Dgcer504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Dgcer504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    

@dataclass
class DgcerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dgcer_400_application_json_object: Optional[Dgcer400ApplicationJSON] = field(default=None)
    dgcer_401_application_json_object: Optional[Dgcer401ApplicationJSON] = field(default=None)
    dgcer_404_application_json_object: Optional[Dgcer404ApplicationJSON] = field(default=None)
    dgcer_500_application_json_object: Optional[Dgcer500ApplicationJSON] = field(default=None)
    dgcer_502_application_json_object: Optional[Dgcer502ApplicationJSON] = field(default=None)
    dgcer_503_application_json_object: Optional[Dgcer503ApplicationJSON] = field(default=None)
    dgcer_504_application_json_object: Optional[Dgcer504ApplicationJSON] = field(default=None)
    
