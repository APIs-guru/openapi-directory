from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class XSSMatchSetSummary:
    r"""XSSMatchSetSummary
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p>
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    xss_match_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSetId') }})
    
