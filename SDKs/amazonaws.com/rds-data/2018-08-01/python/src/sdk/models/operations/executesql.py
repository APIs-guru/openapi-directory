from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ExecuteSQLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class ExecuteSQLRequestBody:
    aws_secret_store_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsSecretStoreArn' }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    db_cluster_or_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbClusterOrInstanceArn' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    sql_statements: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlStatements' }})
    

@dataclass
class ExecuteSQLRequest:
    headers: ExecuteSQLHeaders = field(default=None)
    request: ExecuteSQLRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteSQLResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    execute_sql_response: Optional[shared.ExecuteSQLResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    service_unavailable_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
