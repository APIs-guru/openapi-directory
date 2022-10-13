from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSafetyRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateSafetyRuleRequestBodyAssertionRuleUpdate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    safety_rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SafetyRuleArn' }})
    wait_period_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitPeriodMs' }})
    

@dataclass_json
@dataclass
class UpdateSafetyRuleRequestBodyGatingRuleUpdate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    safety_rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SafetyRuleArn' }})
    wait_period_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitPeriodMs' }})
    

@dataclass_json
@dataclass
class UpdateSafetyRuleRequestBody:
    assertion_rule_update: Optional[UpdateSafetyRuleRequestBodyAssertionRuleUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssertionRuleUpdate' }})
    gating_rule_update: Optional[UpdateSafetyRuleRequestBodyGatingRuleUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatingRuleUpdate' }})
    

@dataclass
class UpdateSafetyRuleRequest:
    headers: UpdateSafetyRuleHeaders = field(default=None)
    request: UpdateSafetyRuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSafetyRuleResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_safety_rule_response: Optional[shared.UpdateSafetyRuleResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
