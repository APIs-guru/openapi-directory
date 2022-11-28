from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoMlJobArtifacts:
    r"""AutoMlJobArtifacts
    The artifacts that are generated during an AutoML job.
    """
    
    candidate_definition_notebook_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateDefinitionNotebookLocation') }})
    data_exploration_notebook_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataExplorationNotebookLocation') }})
    
