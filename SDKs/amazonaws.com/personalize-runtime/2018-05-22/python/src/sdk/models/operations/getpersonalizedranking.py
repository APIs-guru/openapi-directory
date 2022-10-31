from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPersonalizedRankingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetPersonalizedRankingRequestBody:
    campaign_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignArn' }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    filter_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterArn' }})
    filter_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterValues' }})
    input_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputList' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass
class GetPersonalizedRankingRequest:
    headers: GetPersonalizedRankingHeaders = field(default=None)
    request: GetPersonalizedRankingRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetPersonalizedRankingResponse:
    content_type: str = field(default=None)
    get_personalized_ranking_response: Optional[shared.GetPersonalizedRankingResponse] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
