from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Export:
    r"""GoogleCloudApigeeV1Export
    Details of an export job.
    """
    
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    execution_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    
