from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeAcLsXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_DESCRIBE_AC_LS = "AmazonMemoryDB.DescribeACLs"


@dataclass
class DescribeAcLsHeaders:
    x_amz_target: DescribeAcLsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeAcLsRequest:
    headers: DescribeAcLsHeaders = field()
    request: shared.DescribeAcLsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeAcLsResponse:
    content_type: str = field()
    status_code: int = field()
    acl_not_found_fault: Optional[Any] = field(default=None)
    describe_ac_ls_response: Optional[shared.DescribeAcLsResponse] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    
