from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Explanation:
    r"""Explanation
    Explanation for a single feature.
    """
    
    attribution: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureName') }})
    
