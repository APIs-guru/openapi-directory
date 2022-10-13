from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DomainsPutRequests:
    api_core_dto_domains_domain: Optional[shared.APICoreDtoDomainsDomain] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_domains_domain1: Optional[shared.APICoreDtoDomainsDomain] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_domains_domain2: Optional[shared.APICoreDtoDomainsDomain] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class DomainsPutRequest:
    request: DomainsPutRequests = field(default=None)
    

@dataclass
class DomainsPutResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
