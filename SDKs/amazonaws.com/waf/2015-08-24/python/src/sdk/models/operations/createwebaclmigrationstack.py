from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateWebACLMigrationStackXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_CREATE_WEB_ACL_MIGRATION_STACK = "AWSWAF_20150824.CreateWebACLMigrationStack"


@dataclass
class CreateWebACLMigrationStackHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateWebACLMigrationStackXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateWebACLMigrationStackRequest:
    headers: CreateWebACLMigrationStackHeaders = field(default=None)
    request: shared.CreateWebACLMigrationStackRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWebACLMigrationStackResponse:
    content_type: str = field(default=None)
    create_web_acl_migration_stack_response: Optional[shared.CreateWebACLMigrationStackResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_entity_migration_exception: Optional[Any] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_operation_exception: Optional[Any] = field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    
