from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ImporterExporterCodeVerificationAPIPathParams:
    iec: str = field(default=None, metadata={'path_param': { 'field_name': 'iec', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImporterExporterCodeVerificationAPISecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImporterExporterCodeVerificationAPISecurityOption2:
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImporterExporterCodeVerificationAPISecurity:
    option1: Optional[ImporterExporterCodeVerificationAPISecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ImporterExporterCodeVerificationAPISecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ImporterExporterCodeVerificationAPIRequest:
    path_params: ImporterExporterCodeVerificationAPIPathParams = field(default=None)
    security: ImporterExporterCodeVerificationAPISecurity = field(default=None)
    

@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI200ApplicationJSON:
    address_line1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine1' }})
    address_line2: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine2' }})
    branch: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    city: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    data_as_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataAsOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directors: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directors' }})
    entity_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityName' }})
    exporter_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exporterType' }})
    iec: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iec' }})
    iec_issue_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iecIssueDate' }})
    iec_modification_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iecModificationDate' }})
    iec_status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iecStatus' }})
    nature_of_concern: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'natureOfConcern' }})
    pan: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pan' }})
    pin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
class ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum(str, Enum):
    INVALID_PARAMETER = "invalid parameter"
    MISSING_PARAMETER = "missing parameter"

class ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum(str, Enum):
    BAD_REQUEST = "Bad request"
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS_ = "Please provide all mandatory parameters."


@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI400ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI401ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "Url not found"

class ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT_ = "Your API url or path is incorrect."


@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI404ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI500ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWAY = "bad gateway"

class ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE_ = "Publisher service returned an invalid response."


@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI502ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI503ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    
class ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclass
class ImporterExporterCodeVerificationAPI504ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDescription' }})
    

@dataclass
class ImporterExporterCodeVerificationAPIResponse:
    content_type: str = field(default=None)
    importer_exporter_code_verification_api_200_application_json_object: Optional[ImporterExporterCodeVerificationAPI200ApplicationJSON] = field(default=None)
    importer_exporter_code_verification_api_400_application_json_object: Optional[ImporterExporterCodeVerificationAPI400ApplicationJSON] = field(default=None)
    importer_exporter_code_verification_api_401_application_json_object: Optional[ImporterExporterCodeVerificationAPI401ApplicationJSON] = field(default=None)
    importer_exporter_code_verification_api_404_application_json_object: Optional[ImporterExporterCodeVerificationAPI404ApplicationJSON] = field(default=None)
    importer_exporter_code_verification_api_500_application_json_object: Optional[ImporterExporterCodeVerificationAPI500ApplicationJSON] = field(default=None)
    importer_exporter_code_verification_api_502_application_json_object: Optional[ImporterExporterCodeVerificationAPI502ApplicationJSON] = field(default=None)
    importer_exporter_code_verification_api_503_application_json_object: Optional[ImporterExporterCodeVerificationAPI503ApplicationJSON] = field(default=None)
    importer_exporter_code_verification_api_504_application_json_object: Optional[ImporterExporterCodeVerificationAPI504ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
