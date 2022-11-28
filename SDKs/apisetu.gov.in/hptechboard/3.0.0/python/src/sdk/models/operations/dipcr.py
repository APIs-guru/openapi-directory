from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class DipcrRequestBodyCertificateParameters:
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullName') }})
    roll_no: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RollNo') }})
    
class DipcrRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class DipcrRequestBody:
    format: DipcrRequestBodyFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[DipcrRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclass
class DipcrSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Dipcr400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Dipcr400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Dipcr400ApplicationJSON:
    error: Optional[Dipcr400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Dipcr400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Dipcr401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Dipcr401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Dipcr401ApplicationJSON:
    error: Optional[Dipcr401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Dipcr401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Dipcr404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Dipcr404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Dipcr404ApplicationJSON:
    error: Optional[Dipcr404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Dipcr404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Dipcr500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Dipcr500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Dipcr500ApplicationJSON:
    error: Optional[Dipcr500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Dipcr500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Dipcr502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Dipcr502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Dipcr502ApplicationJSON:
    error: Optional[Dipcr502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Dipcr502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Dipcr503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Dipcr503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Dipcr503ApplicationJSON:
    error: Optional[Dipcr503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Dipcr503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Dipcr504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Dipcr504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Dipcr504ApplicationJSON:
    error: Optional[Dipcr504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Dipcr504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclass
class DipcrRequest:
    security: DipcrSecurity = field()
    request: Optional[DipcrRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DipcrResponse:
    content_type: str = field()
    status_code: int = field()
    dipcr_400_application_json_object: Optional[Dipcr400ApplicationJSON] = field(default=None)
    dipcr_401_application_json_object: Optional[Dipcr401ApplicationJSON] = field(default=None)
    dipcr_404_application_json_object: Optional[Dipcr404ApplicationJSON] = field(default=None)
    dipcr_500_application_json_object: Optional[Dipcr500ApplicationJSON] = field(default=None)
    dipcr_502_application_json_object: Optional[Dipcr502ApplicationJSON] = field(default=None)
    dipcr_503_application_json_object: Optional[Dipcr503ApplicationJSON] = field(default=None)
    dipcr_504_application_json_object: Optional[Dipcr504ApplicationJSON] = field(default=None)
    
