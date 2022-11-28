from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceMetadata:
    r"""DeviceMetadata
    Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
    """
    
    entries: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
