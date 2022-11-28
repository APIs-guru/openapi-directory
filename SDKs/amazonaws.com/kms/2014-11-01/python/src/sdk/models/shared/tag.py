from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html\">User-Defined Tag Restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
    """
    
    tag_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKey') }})
    tag_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValue') }})
    
