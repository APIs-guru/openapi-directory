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
class GoogleCloudApigeeV1SecurityProfile:
    r"""GoogleCloudApigeeV1SecurityProfile
    Represents a SecurityProfile resource.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    environments: Optional[List[GoogleCloudApigeeV1SecurityProfileEnvironment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    max_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxScore') }})
    min_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minScore') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    revision_publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionPublishTime') }})
    revision_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUpdateTime') }})
    scoring_configs: Optional[List[GoogleCloudApigeeV1SecurityProfileScoringConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoringConfigs') }})
    
