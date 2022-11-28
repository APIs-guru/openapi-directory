from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListResourcesForTagOptionQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class ListResourcesForTagOptionXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_LIST_RESOURCES_FOR_TAG_OPTION = "AWS242ServiceCatalogService.ListResourcesForTagOption"


@dataclass
class ListResourcesForTagOptionHeaders:
    x_amz_target: ListResourcesForTagOptionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListResourcesForTagOptionRequest:
    headers: ListResourcesForTagOptionHeaders = field()
    query_params: ListResourcesForTagOptionQueryParams = field()
    request: shared.ListResourcesForTagOptionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListResourcesForTagOptionResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameters_exception: Optional[Any] = field(default=None)
    list_resources_for_tag_option_output: Optional[shared.ListResourcesForTagOptionOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    tag_option_not_migrated_exception: Optional[Any] = field(default=None)
    
