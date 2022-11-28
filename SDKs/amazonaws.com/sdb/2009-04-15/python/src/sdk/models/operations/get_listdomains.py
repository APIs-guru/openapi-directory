from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetListDomainsActionEnum(str, Enum):
    LIST_DOMAINS = "ListDomains"

class GetListDomainsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_NINE_04_15 = "2009-04-15"


@dataclass
class GetListDomainsQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetListDomainsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetListDomainsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    max_number_of_domains: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxNumberOfDomains', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListDomainsRequest:
    query_params: GetListDomainsQueryParams = field()
    

@dataclass
class GetListDomainsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
