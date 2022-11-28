from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CfmstRequestBodyCertificateParameters:
    full_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullName') }})
    uid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UID') }})
    rollno: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollno') }})
    year: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
class CfmstRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclass
class CfmstRequestBody:
    format: CfmstRequestBodyFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[CfmstRequestBodyCertificateParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclass
class CfmstSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Cfmst400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Cfmst400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclass
class Cfmst400ApplicationJSON:
    error: Optional[Cfmst400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Cfmst400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Cfmst401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Cfmst401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class Cfmst401ApplicationJSON:
    error: Optional[Cfmst401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Cfmst401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Cfmst404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Cfmst404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclass
class Cfmst404ApplicationJSON:
    error: Optional[Cfmst404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Cfmst404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Cfmst500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Cfmst500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class Cfmst500ApplicationJSON:
    error: Optional[Cfmst500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Cfmst500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Cfmst502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Cfmst502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclass
class Cfmst502ApplicationJSON:
    error: Optional[Cfmst502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Cfmst502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Cfmst503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Cfmst503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class Cfmst503ApplicationJSON:
    error: Optional[Cfmst503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Cfmst503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Cfmst504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Cfmst504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class Cfmst504ApplicationJSON:
    error: Optional[Cfmst504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Cfmst504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclass
class CfmstRequest:
    security: CfmstSecurity = field()
    request: Optional[CfmstRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CfmstResponse:
    content_type: str = field()
    status_code: int = field()
    cfmst_400_application_json_object: Optional[Cfmst400ApplicationJSON] = field(default=None)
    cfmst_401_application_json_object: Optional[Cfmst401ApplicationJSON] = field(default=None)
    cfmst_404_application_json_object: Optional[Cfmst404ApplicationJSON] = field(default=None)
    cfmst_500_application_json_object: Optional[Cfmst500ApplicationJSON] = field(default=None)
    cfmst_502_application_json_object: Optional[Cfmst502ApplicationJSON] = field(default=None)
    cfmst_503_application_json_object: Optional[Cfmst503ApplicationJSON] = field(default=None)
    cfmst_504_application_json_object: Optional[Cfmst504ApplicationJSON] = field(default=None)
    
