from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostDescribeValidDbInstanceModificationsActionEnum(str, Enum):
    DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS = "DescribeValidDBInstanceModifications"

class PostDescribeValidDbInstanceModificationsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class PostDescribeValidDbInstanceModificationsQueryParams:
    action: PostDescribeValidDbInstanceModificationsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostDescribeValidDbInstanceModificationsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDescribeValidDbInstanceModificationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDescribeValidDbInstanceModificationsRequest:
    headers: PostDescribeValidDbInstanceModificationsHeaders = field()
    query_params: PostDescribeValidDbInstanceModificationsQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostDescribeValidDbInstanceModificationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
