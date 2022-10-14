from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSearchParametersForADocumentIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSearchParametersForADocumentIDRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: GetSearchParametersForADocumentIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetSearchParametersForADocumentID400ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetSearchParametersForADocumentID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetSearchParametersForADocumentID500ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetSearchParametersForADocumentIDResponse:
    content_type: str = field(default=None)
    get_search_parameters_for_a_document_id_400_application_json_object: Optional[GetSearchParametersForADocumentID400ApplicationJSON] = field(default=None)
    get_search_parameters_for_a_document_id_401_application_json_object: Optional[GetSearchParametersForADocumentID401ApplicationJSON] = field(default=None)
    get_search_parameters_for_a_document_id_500_application_json_object: Optional[GetSearchParametersForADocumentID500ApplicationJSON] = field(default=None)
    search_parameters_response: Optional[List[shared.SearchParametersResponse]] = field(default=None)
    status_code: int = field(default=None)
    
