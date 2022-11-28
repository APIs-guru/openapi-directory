from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityProfileScoringConfig:
    r"""GoogleCloudApigeeV1SecurityProfileScoringConfig
    Security configurations to manage scoring.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    score_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorePath') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
