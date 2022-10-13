from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListTagsForResourceActionEnum(str, Enum):
    LIST_TAGS_FOR_RESOURCE = "ListTagsForResource"

class GetListTagsForResourceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetListTagsForResourceQueryParams:
    action: GetListTagsForResourceActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    resource_name: str = field(default=None, metadata={'query_param': { 'field_name': 'ResourceName', 'style': 'form', 'explode': True }})
    version: GetListTagsForResourceVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListTagsForResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetListTagsForResourceRequest:
    query_params: GetListTagsForResourceQueryParams = field(default=None)
    headers: GetListTagsForResourceHeaders = field(default=None)
    

@dataclass
class GetListTagsForResourceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
