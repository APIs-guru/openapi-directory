from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrustedAdvisorResourcesSummary:
    resources_flagged: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesFlagged' }})
    resources_ignored: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesIgnored' }})
    resources_processed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesProcessed' }})
    resources_suppressed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesSuppressed' }})
    
