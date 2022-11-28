from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuleGroup:
    r"""RuleGroup
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul>
    """
    
    rule_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupId') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
