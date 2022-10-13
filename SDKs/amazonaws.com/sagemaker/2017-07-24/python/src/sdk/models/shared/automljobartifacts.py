from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoMlJobArtifacts:
    candidate_definition_notebook_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateDefinitionNotebookLocation' }})
    data_exploration_notebook_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataExplorationNotebookLocation' }})
    
