from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artifactsummary


@dataclass_json
@dataclass
class ListArtifactsResponse:
    artifact_summaries: Optional[List[artifactsummary.ArtifactSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
