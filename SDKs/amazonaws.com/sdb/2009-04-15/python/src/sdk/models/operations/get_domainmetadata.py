from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetDomainMetadataActionEnum(str, Enum):
    DOMAIN_METADATA = "DomainMetadata"

class GetDomainMetadataVersionEnum(str, Enum):
    TWO_THOUSAND_AND_NINE_04_15 = "2009-04-15"


@dataclass
class GetDomainMetadataQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetDomainMetadataActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetDomainMetadataVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainMetadataRequest:
    query_params: GetDomainMetadataQueryParams = field()
    

@dataclass
class GetDomainMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
