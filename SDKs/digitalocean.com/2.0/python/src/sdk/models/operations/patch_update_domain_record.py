from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PatchUpdateDomainRecordPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domain_name', 'style': 'simple', 'explode': False }})
    domain_record_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domain_record_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUpdateDomainRecordRequest:
    path_params: PatchUpdateDomainRecordPathParams = field(default=None)
    request: Optional[shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItems] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PatchUpdateDomainRecord401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class PatchUpdateDomainRecordResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    patch_update_domain_record_200_application_json_any: Optional[Any] = field(default=None)
    patch_update_domain_record_401_application_json_object: Optional[PatchUpdateDomainRecord401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
