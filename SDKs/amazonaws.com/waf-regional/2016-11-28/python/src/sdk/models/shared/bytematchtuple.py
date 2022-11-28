from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ByteMatchTuple:
    r"""ByteMatchTuple
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
    """
    
    field_to_match: FieldToMatch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldToMatch') }})
    positional_constraint: PositionalConstraintEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PositionalConstraint') }})
    target_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetString') }})
    text_transformation: TextTransformationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextTransformation') }})
    
