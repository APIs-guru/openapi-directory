from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSampleDataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetSampleDataRequestBodyS3SourceConfig:
    r"""GetSampleDataRequestBodyS3SourceConfig
    Contains information about the source configuration in Amazon S3.
    """
    
    file_format_descriptor: Optional[shared.FileFormatDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileFormatDescriptor') }})
    historical_data_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HistoricalDataPathList') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    templated_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplatedPathList') }})
    

@dataclass_json
@dataclass
class GetSampleDataRequestBody:
    s3_source_config: Optional[GetSampleDataRequestBodyS3SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SourceConfig') }})
    

@dataclass
class GetSampleDataRequest:
    headers: GetSampleDataHeaders = field()
    request: GetSampleDataRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSampleDataResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    get_sample_data_response: Optional[shared.GetSampleDataResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
