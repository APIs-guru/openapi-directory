from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisassociateTagOptionFromResourceXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_DISASSOCIATE_TAG_OPTION_FROM_RESOURCE = "AWS242ServiceCatalogService.DisassociateTagOptionFromResource"


@dataclass
class DisassociateTagOptionFromResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DisassociateTagOptionFromResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateTagOptionFromResourceRequest:
    headers: DisassociateTagOptionFromResourceHeaders = field(default=None)
    request: shared.DisassociateTagOptionFromResourceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateTagOptionFromResourceResponse:
    content_type: str = field(default=None)
    disassociate_tag_option_from_resource_output: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_option_not_migrated_exception: Optional[Any] = field(default=None)
    
