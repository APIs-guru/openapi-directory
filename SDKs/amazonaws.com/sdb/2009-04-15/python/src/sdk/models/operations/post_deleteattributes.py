from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class PostDeleteAttributesActionEnum(str, Enum):
    DELETE_ATTRIBUTES = "DeleteAttributes"

class PostDeleteAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_NINE_04_15 = "2009-04-15"


@dataclass
class PostDeleteAttributesQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: PostDeleteAttributesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: PostDeleteAttributesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDeleteAttributesRequest:
    query_params: PostDeleteAttributesQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostDeleteAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
