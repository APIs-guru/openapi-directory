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
class GoogleCloudApigeeV1RevisionStatus:
    r"""GoogleCloudApigeeV1RevisionStatus
    The status of a specific resource revision.
    """
    
    errors: Optional[List[GoogleCloudApigeeV1UpdateError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    json_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonSpec') }})
    replicas: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicas') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
