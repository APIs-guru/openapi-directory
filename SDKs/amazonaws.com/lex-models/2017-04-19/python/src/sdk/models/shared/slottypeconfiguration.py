from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import slottyperegexconfiguration


@dataclass_json
@dataclass
class SlotTypeConfiguration:
    regex_configuration: Optional[slottyperegexconfiguration.SlotTypeRegexConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regexConfiguration' }})
    
