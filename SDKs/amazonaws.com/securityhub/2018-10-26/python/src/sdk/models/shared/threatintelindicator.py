from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import threatintelindicatorcategory_enum
from . import threatintelindicatortype_enum


@dataclass_json
@dataclass
class ThreatIntelIndicator:
    category: Optional[threatintelindicatorcategory_enum.ThreatIntelIndicatorCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    last_observed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastObservedAt' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUrl' }})
    type: Optional[threatintelindicatortype_enum.ThreatIntelIndicatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
