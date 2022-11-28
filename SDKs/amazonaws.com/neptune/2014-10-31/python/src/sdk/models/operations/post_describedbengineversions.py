from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostDescribeDbEngineVersionsActionEnum(str, Enum):
    DESCRIBE_DB_ENGINE_VERSIONS = "DescribeDBEngineVersions"

class PostDescribeDbEngineVersionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class PostDescribeDbEngineVersionsQueryParams:
    action: PostDescribeDbEngineVersionsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostDescribeDbEngineVersionsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDescribeDbEngineVersionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDescribeDbEngineVersionsRequest:
    headers: PostDescribeDbEngineVersionsHeaders = field()
    query_params: PostDescribeDbEngineVersionsQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostDescribeDbEngineVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
