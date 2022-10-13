from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionkey
from . import mergestrategy_enum
from . import terminologydata


@dataclass_json
@dataclass
class ImportTerminologyRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    encryption_key: Optional[encryptionkey.EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionKey' }})
    merge_strategy: mergestrategy_enum.MergeStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MergeStrategy' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    terminology_data: terminologydata.TerminologyData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminologyData' }})
    
