from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivatedRule:
    r"""ActivatedRule
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
    """
    
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    action: Optional[WafAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    excluded_rules: Optional[List[ExcludedRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedRules') }})
    override_action: Optional[WafOverrideAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverrideAction') }})
    type: Optional[WafRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
