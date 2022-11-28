from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href=\"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags\">Amazon Lightsail Developer Guide</a>.</p>
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
