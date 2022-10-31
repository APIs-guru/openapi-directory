from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateImportJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBodyImportDataSource:
    data_format: Optional[shared.DataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    s3_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Url' }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBodyImportDestination:
    contact_list_destination: Optional[shared.ContactListDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactListDestination' }})
    suppression_list_destination: Optional[shared.SuppressionListDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressionListDestination' }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBody:
    import_data_source: CreateImportJobRequestBodyImportDataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportDataSource' }})
    import_destination: CreateImportJobRequestBodyImportDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportDestination' }})
    

@dataclass
class CreateImportJobRequest:
    headers: CreateImportJobHeaders = field(default=None)
    request: CreateImportJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateImportJobResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_import_job_response: Optional[shared.CreateImportJobResponse] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
