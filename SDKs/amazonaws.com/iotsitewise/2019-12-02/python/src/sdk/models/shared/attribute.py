from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Attribute:
    r"""Attribute
    Contains an asset attribute property. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes\">Attributes</a> in the <i>IoT SiteWise User Guide</i>.
    """
    
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    
