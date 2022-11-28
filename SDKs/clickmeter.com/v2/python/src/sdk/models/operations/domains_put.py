from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DomainsPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_dto_domains_domain: Optional[shared.APICoreDtoDomainsDomain] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_domains_domain1: Optional[shared.APICoreDtoDomainsDomain] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_domains_domain2: Optional[shared.APICoreDtoDomainsDomain] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class DomainsPutRequest:
    request: DomainsPutRequests = field()
    

@dataclass
class DomainsPutResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
