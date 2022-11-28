from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DatastoreInput:
    r"""GoogleCloudApigeeV1DatastoreInput
    The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
    """
    
    datastore_config: Optional[GoogleCloudApigeeV1DatastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1Datastore:
    r"""GoogleCloudApigeeV1Datastore
    The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    datastore_config: Optional[GoogleCloudApigeeV1DatastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreConfig') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime') }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    
