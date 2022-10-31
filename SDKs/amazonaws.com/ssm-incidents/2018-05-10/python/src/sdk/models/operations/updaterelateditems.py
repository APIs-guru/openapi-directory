from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRelatedItemsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateRelatedItemsRequestBodyRelatedItemsUpdate:
    item_to_add: Optional[shared.RelatedItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemToAdd' }})
    item_to_remove: Optional[shared.ItemIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemToRemove' }})
    

@dataclass_json
@dataclass
class UpdateRelatedItemsRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    incident_record_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentRecordArn' }})
    related_items_update: UpdateRelatedItemsRequestBodyRelatedItemsUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedItemsUpdate' }})
    

@dataclass
class UpdateRelatedItemsRequest:
    headers: UpdateRelatedItemsHeaders = field(default=None)
    request: UpdateRelatedItemsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRelatedItemsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_related_items_output: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
