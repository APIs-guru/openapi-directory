from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""UpdateRelatedItemsRequestBodyRelatedItemsUpdate
    Details about the related item you're adding.
    """
    
    item_to_add: Optional[shared.RelatedItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemToAdd') }})
    item_to_remove: Optional[shared.ItemIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemToRemove') }})
    

@dataclass_json
@dataclass
class UpdateRelatedItemsRequestBody:
    incident_record_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordArn') }})
    related_items_update: UpdateRelatedItemsRequestBodyRelatedItemsUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedItemsUpdate') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    

@dataclass
class UpdateRelatedItemsRequest:
    headers: UpdateRelatedItemsHeaders = field()
    request: UpdateRelatedItemsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRelatedItemsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_related_items_output: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
