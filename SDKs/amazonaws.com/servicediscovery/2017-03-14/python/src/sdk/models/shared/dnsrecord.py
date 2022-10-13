from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import recordtype_enum


@dataclass_json
@dataclass
class DNSRecord:
    ttl: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TTL' }})
    type: recordtype_enum.RecordTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
