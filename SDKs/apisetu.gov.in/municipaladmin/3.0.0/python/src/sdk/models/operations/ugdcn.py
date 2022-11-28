from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UgdcnRequestBodyCertificateParameters:
    document_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentNumber') }})
    
class UgdcnRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class UgdcnRequestBody:
    format: UgdcnRequestBodyFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[UgdcnRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclass
class UgdcnSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Ugdcn400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Ugdcn400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Ugdcn400ApplicationJSON:
    error: Optional[Ugdcn400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ugdcn400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ugdcn401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Ugdcn401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Ugdcn401ApplicationJSON:
    error: Optional[Ugdcn401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ugdcn401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ugdcn404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Ugdcn404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Ugdcn404ApplicationJSON:
    error: Optional[Ugdcn404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ugdcn404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ugdcn500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Ugdcn500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Ugdcn500ApplicationJSON:
    error: Optional[Ugdcn500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ugdcn500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ugdcn502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Ugdcn502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Ugdcn502ApplicationJSON:
    error: Optional[Ugdcn502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ugdcn502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ugdcn503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Ugdcn503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Ugdcn503ApplicationJSON:
    error: Optional[Ugdcn503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ugdcn503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ugdcn504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Ugdcn504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Ugdcn504ApplicationJSON:
    error: Optional[Ugdcn504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ugdcn504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclass
class UgdcnRequest:
    security: UgdcnSecurity = field()
    request: Optional[UgdcnRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UgdcnResponse:
    content_type: str = field()
    status_code: int = field()
    ugdcn_400_application_json_object: Optional[Ugdcn400ApplicationJSON] = field(default=None)
    ugdcn_401_application_json_object: Optional[Ugdcn401ApplicationJSON] = field(default=None)
    ugdcn_404_application_json_object: Optional[Ugdcn404ApplicationJSON] = field(default=None)
    ugdcn_500_application_json_object: Optional[Ugdcn500ApplicationJSON] = field(default=None)
    ugdcn_502_application_json_object: Optional[Ugdcn502ApplicationJSON] = field(default=None)
    ugdcn_503_application_json_object: Optional[Ugdcn503ApplicationJSON] = field(default=None)
    ugdcn_504_application_json_object: Optional[Ugdcn504ApplicationJSON] = field(default=None)
    
