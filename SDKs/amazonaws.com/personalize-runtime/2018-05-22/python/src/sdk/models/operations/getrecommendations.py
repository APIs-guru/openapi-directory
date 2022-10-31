from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetRecommendationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetRecommendationsRequestBody:
    campaign_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignArn' }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    filter_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterArn' }})
    filter_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterValues' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numResults' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass
class GetRecommendationsRequest:
    headers: GetRecommendationsHeaders = field(default=None)
    request: GetRecommendationsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRecommendationsResponse:
    content_type: str = field(default=None)
    get_recommendations_response: Optional[shared.GetRecommendationsResponse] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
