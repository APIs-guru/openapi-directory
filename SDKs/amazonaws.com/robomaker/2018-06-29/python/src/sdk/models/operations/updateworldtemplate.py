from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateWorldTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateWorldTemplateRequestBodyTemplateLocation:
    r"""UpdateWorldTemplateRequestBodyTemplateLocation
    Information about a template location.
    """
    
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Key') }})
    

@dataclass_json
@dataclass
class UpdateWorldTemplateRequestBody:
    template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    template_location: Optional[UpdateWorldTemplateRequestBodyTemplateLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateLocation') }})
    

@dataclass
class UpdateWorldTemplateRequest:
    headers: UpdateWorldTemplateHeaders = field()
    request: UpdateWorldTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWorldTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_world_template_response: Optional[shared.UpdateWorldTemplateResponse] = field(default=None)
    
