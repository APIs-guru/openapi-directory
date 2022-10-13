from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExtensionConfig:
    notification_receiver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationReceiver' }})
    signing_key_fingerprints_sha256: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKeyFingerprintsSha256' }})
    
