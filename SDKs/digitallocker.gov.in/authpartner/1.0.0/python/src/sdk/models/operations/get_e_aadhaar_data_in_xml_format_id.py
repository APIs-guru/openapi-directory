from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEAadhaarDataInXMLFormatIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetEAadhaarDataInXMLFormatIDRequest:
    security: GetEAadhaarDataInXMLFormatIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetEAadhaarDataInXMLFormatID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetEAadhaarDataInXMLFormatID404ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetEAadhaarDataInXMLFormatIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_401_application_json_object: Optional[GetEAadhaarDataInXMLFormatID401ApplicationJSON] = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_404_application_json_object: Optional[GetEAadhaarDataInXMLFormatID404ApplicationJSON] = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_500_application_json_one_of: Optional[Any] = field(default=None)
    get_e_aadhaar_data_in_xml_format_id_503_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
