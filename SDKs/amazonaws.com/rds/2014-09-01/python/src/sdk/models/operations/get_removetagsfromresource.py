from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetRemoveTagsFromResourceActionEnum(str, Enum):
    REMOVE_TAGS_FROM_RESOURCE = "RemoveTagsFromResource"

class GetRemoveTagsFromResourceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_09_01 = "2014-09-01"


@dataclass
class GetRemoveTagsFromResourceQueryParams:
    action: GetRemoveTagsFromResourceActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    resource_name: str = field(metadata={'query_param': { 'field_name': 'ResourceName', 'style': 'form', 'explode': True }})
    tag_keys: List[str] = field(metadata={'query_param': { 'field_name': 'TagKeys', 'style': 'form', 'explode': True }})
    version: GetRemoveTagsFromResourceVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoveTagsFromResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoveTagsFromResourceRequest:
    headers: GetRemoveTagsFromResourceHeaders = field()
    query_params: GetRemoveTagsFromResourceQueryParams = field()
    

@dataclass
class GetRemoveTagsFromResourceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
