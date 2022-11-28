from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class SvcerRequestBodyCertificateParameters:
    dob: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DOB') }})
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullName') }})
    rroll: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RROLL') }})
    rroll_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RROLL_CODE') }})
    year: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
class SvcerRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class SvcerRequestBody:
    format: SvcerRequestBodyFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[SvcerRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclass
class SvcerSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Svcer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Svcer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Svcer400ApplicationJSON:
    error: Optional[Svcer400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Svcer400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Svcer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Svcer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Svcer401ApplicationJSON:
    error: Optional[Svcer401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Svcer401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Svcer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Svcer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Svcer404ApplicationJSON:
    error: Optional[Svcer404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Svcer404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Svcer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Svcer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Svcer500ApplicationJSON:
    error: Optional[Svcer500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Svcer500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Svcer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Svcer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Svcer502ApplicationJSON:
    error: Optional[Svcer502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Svcer502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Svcer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Svcer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Svcer503ApplicationJSON:
    error: Optional[Svcer503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Svcer503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Svcer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Svcer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Svcer504ApplicationJSON:
    error: Optional[Svcer504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Svcer504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclass
class SvcerRequest:
    security: SvcerSecurity = field()
    request: Optional[SvcerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SvcerResponse:
    content_type: str = field()
    status_code: int = field()
    svcer_400_application_json_object: Optional[Svcer400ApplicationJSON] = field(default=None)
    svcer_401_application_json_object: Optional[Svcer401ApplicationJSON] = field(default=None)
    svcer_404_application_json_object: Optional[Svcer404ApplicationJSON] = field(default=None)
    svcer_500_application_json_object: Optional[Svcer500ApplicationJSON] = field(default=None)
    svcer_502_application_json_object: Optional[Svcer502ApplicationJSON] = field(default=None)
    svcer_503_application_json_object: Optional[Svcer503ApplicationJSON] = field(default=None)
    svcer_504_application_json_object: Optional[Svcer504ApplicationJSON] = field(default=None)
    
