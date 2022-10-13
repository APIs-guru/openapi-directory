from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import slotvalueregexfilter
from . import slotvalueresolutionstrategy_enum


@dataclass_json
@dataclass
class SlotValueSelectionSetting:
    regex_filter: Optional[slotvalueregexfilter.SlotValueRegexFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regexFilter' }})
    resolution_strategy: slotvalueresolutionstrategy_enum.SlotValueResolutionStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStrategy' }})
    
