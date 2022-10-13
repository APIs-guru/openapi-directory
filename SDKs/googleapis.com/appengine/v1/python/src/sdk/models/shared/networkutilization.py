from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkUtilization:
    target_received_bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetReceivedBytesPerSecond' }})
    target_received_packets_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetReceivedPacketsPerSecond' }})
    target_sent_bytes_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSentBytesPerSecond' }})
    target_sent_packets_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSentPacketsPerSecond' }})
    
