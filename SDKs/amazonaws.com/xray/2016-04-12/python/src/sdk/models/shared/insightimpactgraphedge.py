from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InsightImpactGraphEdge:
    r"""InsightImpactGraphEdge
    The connection between two service in an insight impact graph.
    """
    
    reference_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    
