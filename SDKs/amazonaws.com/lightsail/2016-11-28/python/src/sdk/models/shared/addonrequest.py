from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddOnRequest:
    r"""AddOnRequest
    <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href=\"https://aws.amazon.com/lightsail/pricing/\">Lightsail pricing page</a>.</p> </note>
    """
    
    add_on_type: AddOnTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOnType') }})
    auto_snapshot_add_on_request: Optional[AutoSnapshotAddOnRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoSnapshotAddOnRequest') }})
    
