from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetCertificateDataInXMLFormatFromURIIDPathParams:
    uri: str = field(metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCertificateDataInXMLFormatFromURIIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetCertificateDataInXMLFormatFromURIID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetCertificateDataInXMLFormatFromURIID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetCertificateDataInXMLFormatFromURIID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetCertificateDataInXMLFormatFromURIIDRequest:
    path_params: GetCertificateDataInXMLFormatFromURIIDPathParams = field()
    security: GetCertificateDataInXMLFormatFromURIIDSecurity = field()
    

@dataclass
class GetCertificateDataInXMLFormatFromURIIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_certificate_data_in_xml_format_from_uri_id_400_application_json_object: Optional[GetCertificateDataInXMLFormatFromURIID400ApplicationJSON] = field(default=None)
    get_certificate_data_in_xml_format_from_uri_id_401_application_json_object: Optional[GetCertificateDataInXMLFormatFromURIID401ApplicationJSON] = field(default=None)
    get_certificate_data_in_xml_format_from_uri_id_404_application_json_object: Optional[GetCertificateDataInXMLFormatFromURIID404ApplicationJSON] = field(default=None)
    get_certificate_data_in_xml_format_from_uri_id_500_application_json_one_of: Optional[Any] = field(default=None)
    get_certificate_data_in_xml_format_from_uri_id_503_application_json_one_of: Optional[Any] = field(default=None)
    
