from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import usercontext
from . import metadataproperties
from . import trialsource
from . import tag
from . import trialcomponentsimplesummary


@dataclass_json
@dataclass
class Trial:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    experiment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentName' }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    source: Optional[trialsource.TrialSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    trial_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialArn' }})
    trial_component_summaries: Optional[List[trialcomponentsimplesummary.TrialComponentSimpleSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialComponentSummaries' }})
    trial_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialName' }})
    
