from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PublishLayerVersionPathParams:
    layer_name: str = field(metadata={'path_param': { 'field_name': 'LayerName', 'style': 'simple', 'explode': False }})
    

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
    r"""PublishLayerVersionRequestBodyContent
    A ZIP archive that contains the contents of an <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html\">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
    """
    
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Key') }})
    s3_object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ObjectVersion') }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFile') }})
    

@dataclass_json
@dataclass
class PublishLayerVersionRequestBody:
    content: PublishLayerVersionRequestBodyContent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    compatible_runtimes: Optional[List[shared.RuntimeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompatibleRuntimes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    license_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseInfo') }})
    

@dataclass
class PublishLayerVersionRequest:
    headers: PublishLayerVersionHeaders = field()
    path_params: PublishLayerVersionPathParams = field()
    request: PublishLayerVersionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishLayerVersionResponse:
    content_type: str = field()
    status_code: int = field()
    code_storage_exceeded_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    publish_layer_version_response: Optional[shared.PublishLayerVersionResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
