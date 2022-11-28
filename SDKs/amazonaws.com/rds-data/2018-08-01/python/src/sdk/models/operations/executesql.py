from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ExecuteSQLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ExecuteSQLRequestBody:
    aws_secret_store_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsSecretStoreArn') }})
    db_cluster_or_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbClusterOrInstanceArn') }})
    sql_statements: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlStatements') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass
class ExecuteSQLRequest:
    headers: ExecuteSQLHeaders = field()
    request: ExecuteSQLRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteSQLResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    execute_sql_response: Optional[shared.ExecuteSQLResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    service_unavailable_error: Optional[Any] = field(default=None)
    
