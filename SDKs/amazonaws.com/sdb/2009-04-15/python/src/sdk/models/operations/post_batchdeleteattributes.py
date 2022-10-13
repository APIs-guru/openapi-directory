from dataclasses import dataclass, field
from typing import Enum,Optional

class PostBatchDeleteAttributesActionEnum(str, Enum):
    BATCH_DELETE_ATTRIBUTES = "BatchDeleteAttributes"

class PostBatchDeleteAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_NINE_04_15 = "2009-04-15"


@dataclass
class PostBatchDeleteAttributesQueryParams:
    aws_access_key_id: str = field(default=None, metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: PostBatchDeleteAttributesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    signature: str = field(default=None, metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: PostBatchDeleteAttributesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostBatchDeleteAttributesRequest:
    query_params: PostBatchDeleteAttributesQueryParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostBatchDeleteAttributesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
