from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""CreateImportJobRequestBodyImportDataSource
    An object that contains details about the data source of the import job.
    """
    
    data_format: Optional[shared.DataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    s3_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBodyImportDestination:
    r"""CreateImportJobRequestBodyImportDestination
    An object that contains details about the resource destination the import job is going to target.
    """
    
    contact_list_destination: Optional[shared.ContactListDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListDestination') }})
    suppression_list_destination: Optional[shared.SuppressionListDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionListDestination') }})
    

@dataclass_json
@dataclass
class CreateImportJobRequestBody:
    import_data_source: CreateImportJobRequestBodyImportDataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportDataSource') }})
    import_destination: CreateImportJobRequestBodyImportDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportDestination') }})
    

@dataclass
class CreateImportJobRequest:
    headers: CreateImportJobHeaders = field()
    request: CreateImportJobRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateImportJobResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_import_job_response: Optional[shared.CreateImportJobResponse] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
