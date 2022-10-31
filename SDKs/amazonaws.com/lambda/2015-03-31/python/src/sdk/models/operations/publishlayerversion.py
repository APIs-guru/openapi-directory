from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PublishLayerVersionPathParams:
    layer_name: str = field(default=None, metadata={'path_param': { 'field_name': 'LayerName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishLayerVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PublishLayerVersionRequestBodyContent:
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Key' }})
    s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ObjectVersion' }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFile' }})
    

@dataclass_json
@dataclass
class PublishLayerVersionRequestBody:
    compatible_runtimes: Optional[List[shared.RuntimeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompatibleRuntimes' }})
    content: PublishLayerVersionRequestBodyContent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    license_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseInfo' }})
    

@dataclass
class PublishLayerVersionRequest:
    path_params: PublishLayerVersionPathParams = field(default=None)
    headers: PublishLayerVersionHeaders = field(default=None)
    request: PublishLayerVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishLayerVersionResponse:
    code_storage_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    publish_layer_version_response: Optional[shared.PublishLayerVersionResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
