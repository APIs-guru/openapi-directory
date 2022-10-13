from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConversionsPutRequests:
    api_core_dto_conversions_conversion: Optional[shared.APICoreDtoConversionsConversion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_conversions_conversion1: Optional[shared.APICoreDtoConversionsConversion] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_conversions_conversion2: Optional[shared.APICoreDtoConversionsConversion] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ConversionsPutRequest:
    request: ConversionsPutRequests = field(default=None)
    

@dataclass
class ConversionsPutResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
