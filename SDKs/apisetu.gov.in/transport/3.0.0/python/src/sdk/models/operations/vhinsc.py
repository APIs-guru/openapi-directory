from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class VhinscRequestBodyCertificateParameters:
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullName') }})
    uid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UID') }})
    chasis_no: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chasis_no') }})
    reg_no: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reg_no') }})
    swd_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('swd_name') }})
    
class VhinscRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class VhinscRequestBody:
    format: VhinscRequestBodyFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[VhinscRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclass
class VhinscSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Vhinsc400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Vhinsc400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Vhinsc400ApplicationJSON:
    error: Optional[Vhinsc400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Vhinsc400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Vhinsc401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Vhinsc401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Vhinsc401ApplicationJSON:
    error: Optional[Vhinsc401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Vhinsc401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Vhinsc404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Vhinsc404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Vhinsc404ApplicationJSON:
    error: Optional[Vhinsc404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Vhinsc404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Vhinsc500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Vhinsc500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Vhinsc500ApplicationJSON:
    error: Optional[Vhinsc500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Vhinsc500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Vhinsc502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Vhinsc502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Vhinsc502ApplicationJSON:
    error: Optional[Vhinsc502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Vhinsc502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Vhinsc503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Vhinsc503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Vhinsc503ApplicationJSON:
    error: Optional[Vhinsc503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Vhinsc503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Vhinsc504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Vhinsc504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Vhinsc504ApplicationJSON:
    error: Optional[Vhinsc504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Vhinsc504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclass
class VhinscRequest:
    security: VhinscSecurity = field()
    request: Optional[VhinscRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VhinscResponse:
    content_type: str = field()
    status_code: int = field()
    vhinsc_400_application_json_object: Optional[Vhinsc400ApplicationJSON] = field(default=None)
    vhinsc_401_application_json_object: Optional[Vhinsc401ApplicationJSON] = field(default=None)
    vhinsc_404_application_json_object: Optional[Vhinsc404ApplicationJSON] = field(default=None)
    vhinsc_500_application_json_object: Optional[Vhinsc500ApplicationJSON] = field(default=None)
    vhinsc_502_application_json_object: Optional[Vhinsc502ApplicationJSON] = field(default=None)
    vhinsc_503_application_json_object: Optional[Vhinsc503ApplicationJSON] = field(default=None)
    vhinsc_504_application_json_object: Optional[Vhinsc504ApplicationJSON] = field(default=None)
    
