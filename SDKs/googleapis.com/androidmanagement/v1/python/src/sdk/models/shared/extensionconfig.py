from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExtensionConfig:
    r"""ExtensionConfig
    Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline.
    """
    
    notification_receiver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationReceiver') }})
    signing_key_fingerprints_sha256: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyFingerprintsSha256') }})
    
