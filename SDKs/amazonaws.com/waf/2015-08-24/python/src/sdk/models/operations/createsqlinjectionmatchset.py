from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateSQLInjectionMatchSetXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_CREATE_SQL_INJECTION_MATCH_SET = "AWSWAF_20150824.CreateSqlInjectionMatchSet"


@dataclass
class CreateSQLInjectionMatchSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateSQLInjectionMatchSetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateSQLInjectionMatchSetRequest:
    headers: CreateSQLInjectionMatchSetHeaders = field(default=None)
    request: shared.CreateSQLInjectionMatchSetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSQLInjectionMatchSetResponse:
    content_type: str = field(default=None)
    create_sql_injection_match_set_response: Optional[shared.CreateSQLInjectionMatchSetResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_disallowed_name_exception: Optional[Any] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_account_exception: Optional[Any] = field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = field(default=None)
    waf_stale_data_exception: Optional[Any] = field(default=None)
    
