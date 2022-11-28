from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CandidateProperties:
    r"""CandidateProperties
    The properties of an AutoML candidate job.
    """
    
    candidate_artifact_locations: Optional[CandidateArtifactLocations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateArtifactLocations') }})
    candidate_metrics: Optional[List[MetricDatum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateMetrics') }})
    
