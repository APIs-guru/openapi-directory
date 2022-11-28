from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum

class GetGetAttributesActionEnum(str, Enum):
    GET_ATTRIBUTES = "GetAttributes"

class GetGetAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_NINE_04_15 = "2009-04-15"


@dataclass
class GetGetAttributesQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetGetAttributesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    item_name: str = field(metadata={'query_param': { 'field_name': 'ItemName', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetGetAttributesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    attribute_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AttributeNames', 'style': 'form', 'explode': True }})
    consistent_read: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ConsistentRead', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetAttributesRequest:
    query_params: GetGetAttributesQueryParams = field()
    

@dataclass
class GetGetAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
