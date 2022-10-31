from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateGroupRequestBodyInsightsConfiguration:
    insights_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightsEnabled' }})
    notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationsEnabled' }})
    

@dataclass_json
@dataclass
class UpdateGroupRequestBody:
    filter_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterExpression' }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupARN' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    insights_configuration: Optional[UpdateGroupRequestBodyInsightsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightsConfiguration' }})
    

@dataclass
class UpdateGroupRequest:
    headers: UpdateGroupHeaders = field(default=None)
    request: UpdateGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGroupResponse:
    content_type: str = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    update_group_result: Optional[shared.UpdateGroupResult] = field(default=None)
    
