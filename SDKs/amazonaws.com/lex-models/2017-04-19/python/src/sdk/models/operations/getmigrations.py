from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetMigrationsMigrationStatusEqualsEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

class GetMigrationsSortByAttributeEnum(str, Enum):
    V1_BOT_NAME = "V1_BOT_NAME"
    MIGRATION_DATE_TIME = "MIGRATION_DATE_TIME"

class GetMigrationsSortByOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class GetMigrationsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    migration_status_equals: Optional[GetMigrationsMigrationStatusEqualsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'migrationStatusEquals', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    sort_by_attribute: Optional[GetMigrationsSortByAttributeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortByAttribute', 'style': 'form', 'explode': True }})
    sort_by_order: Optional[GetMigrationsSortByOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortByOrder', 'style': 'form', 'explode': True }})
    v1_bot_name_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'v1BotNameContains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMigrationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetMigrationsRequest:
    query_params: GetMigrationsQueryParams = field(default=None)
    headers: GetMigrationsHeaders = field(default=None)
    

@dataclass
class GetMigrationsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_migrations_response: Optional[shared.GetMigrationsResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
