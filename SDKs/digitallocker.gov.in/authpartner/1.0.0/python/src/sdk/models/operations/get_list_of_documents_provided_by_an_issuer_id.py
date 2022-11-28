from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetListOfDocumentsProvidedByAnIssuerIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetListOfDocumentsProvidedByAnIssuerIDRequest:
    security: GetListOfDocumentsProvidedByAnIssuerIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GetListOfDocumentsProvidedByAnIssuerIDResponse:
    content_type: str = field()
    status_code: int = field()
    doc_type_response: Optional[shared.DocTypeResponse] = field(default=None)
    get_list_of_documents_provided_by_an_issuer_id_400_application_json_object: Optional[GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSON] = field(default=None)
    get_list_of_documents_provided_by_an_issuer_id_401_application_json_object: Optional[GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSON] = field(default=None)
    get_list_of_documents_provided_by_an_issuer_id_500_application_json_object: Optional[GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSON] = field(default=None)
    
