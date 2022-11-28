from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConversionsPostPathParams:
    conversion_id: int = field(metadata={'path_param': { 'field_name': 'conversionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConversionsPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_dto_conversions_conversion: Optional[shared.APICoreDtoConversionsConversion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_conversions_conversion1: Optional[shared.APICoreDtoConversionsConversion] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_conversions_conversion2: Optional[shared.APICoreDtoConversionsConversion] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ConversionsPostRequest:
    path_params: ConversionsPostPathParams = field()
    request: ConversionsPostRequests = field()
    

@dataclass
class ConversionsPostResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
