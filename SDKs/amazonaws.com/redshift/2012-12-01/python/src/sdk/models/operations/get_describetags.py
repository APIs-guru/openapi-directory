from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDescribeTagsActionEnum(str, Enum):
    DESCRIBE_TAGS = "DescribeTags"

class GetDescribeTagsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetDescribeTagsQueryParams:
    action: GetDescribeTagsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeTagsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    resource_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ResourceName', 'style': 'form', 'explode': True }})
    resource_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ResourceType', 'style': 'form', 'explode': True }})
    tag_keys: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'TagKeys', 'style': 'form', 'explode': True }})
    tag_values: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'TagValues', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeTagsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeTagsRequest:
    headers: GetDescribeTagsHeaders = field()
    query_params: GetDescribeTagsQueryParams = field()
    

@dataclass
class GetDescribeTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
