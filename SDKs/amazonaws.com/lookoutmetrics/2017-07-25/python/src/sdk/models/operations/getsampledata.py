from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSampleDataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class GetSampleDataRequestBodyS3SourceConfig:
    file_format_descriptor: Optional[shared.FileFormatDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileFormatDescriptor' }})
    historical_data_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HistoricalDataPathList' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    templated_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplatedPathList' }})
    

@dataclass_json
@dataclass
class GetSampleDataRequestBody:
    s3_source_config: Optional[GetSampleDataRequestBodyS3SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3SourceConfig' }})
    

@dataclass
class GetSampleDataRequest:
    headers: GetSampleDataHeaders = field(default=None)
    request: GetSampleDataRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSampleDataResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_sample_data_response: Optional[shared.GetSampleDataResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
