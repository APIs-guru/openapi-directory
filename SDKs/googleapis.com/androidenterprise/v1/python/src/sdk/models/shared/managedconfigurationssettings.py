from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManagedConfigurationsSettings:
    r"""ManagedConfigurationsSettings
    A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.
    """
    
    last_updated_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedTimestampMillis') }})
    mcm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcmId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
