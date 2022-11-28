from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateSafetyRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSafetyRuleRequestBodyAssertionRuleUpdate:
    r"""UpdateSafetyRuleRequestBodyAssertionRuleUpdate
    An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    safety_rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafetyRuleArn') }})
    wait_period_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    

@dataclass_json
@dataclass
class UpdateSafetyRuleRequestBodyGatingRuleUpdate:
    r"""UpdateSafetyRuleRequestBodyGatingRuleUpdate
    Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    safety_rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafetyRuleArn') }})
    wait_period_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitPeriodMs') }})
    

@dataclass_json
@dataclass
class UpdateSafetyRuleRequestBody:
    assertion_rule_update: Optional[UpdateSafetyRuleRequestBodyAssertionRuleUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssertionRuleUpdate') }})
    gating_rule_update: Optional[UpdateSafetyRuleRequestBodyGatingRuleUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatingRuleUpdate') }})
    

@dataclass
class UpdateSafetyRuleRequest:
    headers: UpdateSafetyRuleHeaders = field()
    request: UpdateSafetyRuleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSafetyRuleResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_safety_rule_response: Optional[shared.UpdateSafetyRuleResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
