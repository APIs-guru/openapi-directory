from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import candidateartifactlocations
from . import metricdatum


@dataclass_json
@dataclass
class CandidateProperties:
    candidate_artifact_locations: Optional[candidateartifactlocations.CandidateArtifactLocations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateArtifactLocations' }})
    candidate_metrics: Optional[List[metricdatum.MetricDatum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateMetrics' }})
    
