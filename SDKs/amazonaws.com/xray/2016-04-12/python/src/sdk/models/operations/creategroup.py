from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateGroupRequestBodyInsightsConfiguration:
    insights_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightsEnabled' }})
    notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationsEnabled' }})
    

@dataclass_json
@dataclass
class CreateGroupRequestBody:
    filter_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterExpression' }})
    group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    insights_configuration: Optional[CreateGroupRequestBodyInsightsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightsConfiguration' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreateGroupRequest:
    headers: CreateGroupHeaders = field(default=None)
    request: CreateGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGroupResponse:
    content_type: str = field(default=None)
    create_group_result: Optional[shared.CreateGroupResult] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
