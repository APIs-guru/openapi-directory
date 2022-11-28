from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateWebACLMigrationStackXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_CREATE_WEB_ACL_MIGRATION_STACK = "AWSWAF_Regional_20161128.CreateWebACLMigrationStack"


@dataclass
class CreateWebACLMigrationStackHeaders:
    x_amz_target: CreateWebACLMigrationStackXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWebACLMigrationStackRequest:
    headers: CreateWebACLMigrationStackHeaders = field()
    request: shared.CreateWebACLMigrationStackRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWebACLMigrationStackResponse:
    content_type: str = field()
    status_code: int = field()
    create_web_acl_migration_stack_response: Optional[shared.CreateWebACLMigrationStackResponse] = field(default=None)
    waf_entity_migration_exception: Optional[Any] = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_invalid_operation_exception: Optional[Any] = field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    
