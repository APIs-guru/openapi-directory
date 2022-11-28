from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class TagResourcesXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_TAG_RESOURCES = "ResourceGroupsTaggingAPI_20170126.TagResources"


@dataclass
class TagResourcesHeaders:
    x_amz_target: TagResourcesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagResourcesRequest:
    headers: TagResourcesHeaders = field()
    request: shared.TagResourcesInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagResourcesResponse:
    content_type: str = field()
    status_code: int = field()
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    tag_resources_output: Optional[shared.TagResourcesOutput] = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
