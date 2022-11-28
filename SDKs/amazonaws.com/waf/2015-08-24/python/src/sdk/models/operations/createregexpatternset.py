from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateRegexPatternSetXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_CREATE_REGEX_PATTERN_SET = "AWSWAF_20150824.CreateRegexPatternSet"


@dataclass
class CreateRegexPatternSetHeaders:
    x_amz_target: CreateRegexPatternSetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRegexPatternSetRequest:
    headers: CreateRegexPatternSetHeaders = field()
    request: shared.CreateRegexPatternSetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRegexPatternSetResponse:
    content_type: str = field()
    status_code: int = field()
    create_regex_pattern_set_response: Optional[shared.CreateRegexPatternSetResponse] = field(default=None)
    waf_disallowed_name_exception: Optional[Any] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = field(default=None)
    waf_stale_data_exception: Optional[Any] = field(default=None)
    
