from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetEAadhaarDataInXMLFormatIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetEAadhaarDataInXMLFormatID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetEAadhaarDataInXMLFormatID404ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetEAadhaarDataInXMLFormatIDRequest:
    security: GetEAadhaarDataInXMLFormatIDSecurity = field()
    

@dataclass
class GetEAadhaarDataInXMLFormatIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_401_application_json_object: Optional[GetEAadhaarDataInXMLFormatID401ApplicationJSON] = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_404_application_json_object: Optional[GetEAadhaarDataInXMLFormatID404ApplicationJSON] = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_500_application_json_one_of: Optional[Any] = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_503_application_json_one_of: Optional[Any] = field(default=None)
    
