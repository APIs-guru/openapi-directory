from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExcludedRule:
    r"""ExcludedRule
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p>
    """
    
    rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    
