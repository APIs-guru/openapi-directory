from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateTagOptionXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_CREATE_TAG_OPTION = "AWS242ServiceCatalogService.CreateTagOption"


@dataclass
class CreateTagOptionHeaders:
    x_amz_target: CreateTagOptionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTagOptionRequest:
    headers: CreateTagOptionHeaders = field()
    request: shared.CreateTagOptionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTagOptionResponse:
    content_type: str = field()
    status_code: int = field()
    create_tag_option_output: Optional[shared.CreateTagOptionOutput] = field(default=None)
    duplicate_resource_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    tag_option_not_migrated_exception: Optional[Any] = field(default=None)
    
