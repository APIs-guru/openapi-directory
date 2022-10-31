from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSafetyRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSafetyRuleRequestBodyAssertionRule:
    asserted_controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssertedControls' }})
    control_panel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlPanelArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_config: Optional[shared.RuleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleConfig' }})
    wait_period_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitPeriodMs' }})
    

@dataclass_json
@dataclass
class CreateSafetyRuleRequestBodyGatingRule:
    control_panel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlPanelArn' }})
    gating_controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatingControls' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_config: Optional[shared.RuleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleConfig' }})
    target_controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetControls' }})
    wait_period_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitPeriodMs' }})
    

@dataclass_json
@dataclass
class CreateSafetyRuleRequestBody:
    assertion_rule: Optional[CreateSafetyRuleRequestBodyAssertionRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssertionRule' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    gating_rule: Optional[CreateSafetyRuleRequestBodyGatingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatingRule' }})
    

@dataclass
class CreateSafetyRuleRequest:
    headers: CreateSafetyRuleHeaders = field(default=None)
    request: CreateSafetyRuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSafetyRuleResponse:
    content_type: str = field(default=None)
    create_safety_rule_response: Optional[shared.CreateSafetyRuleResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
