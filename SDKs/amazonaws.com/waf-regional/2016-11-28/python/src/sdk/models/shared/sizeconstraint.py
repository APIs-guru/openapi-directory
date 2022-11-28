from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SizeConstraint:
    r"""SizeConstraint
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of \"<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>\". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>
    """
    
    comparison_operator: ComparisonOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    field_to_match: FieldToMatch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldToMatch') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    text_transformation: TextTransformationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextTransformation') }})
    
