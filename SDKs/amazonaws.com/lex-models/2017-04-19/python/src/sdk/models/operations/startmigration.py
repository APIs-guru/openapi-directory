from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartMigrationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class StartMigrationRequestBodyMigrationStrategyEnum(str, Enum):
    CREATE_NEW = "CREATE_NEW"
    UPDATE_EXISTING = "UPDATE_EXISTING"


@dataclass_json
@dataclass
class StartMigrationRequestBody:
    migration_strategy: StartMigrationRequestBodyMigrationStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migrationStrategy' }})
    v1_bot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1BotName' }})
    v1_bot_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1BotVersion' }})
    v2_bot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2BotName' }})
    v2_bot_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2BotRole' }})
    

@dataclass
class StartMigrationRequest:
    headers: StartMigrationHeaders = field(default=None)
    request: StartMigrationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartMigrationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    start_migration_response: Optional[shared.StartMigrationResponse] = field(default=None)
    status_code: int = field(default=None)
    
