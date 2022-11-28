from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Connection:
    r"""Connection
    Configuration parameters to establish connection with an external data source, except the credential attributes.
    """
    
    cloud_sql: Optional[CloudSQLProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSql') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyName') }})
    has_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasCredential') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class ConnectionInput:
    r"""ConnectionInput
    Configuration parameters to establish connection with an external data source, except the credential attributes.
    """
    
    cloud_sql: Optional[CloudSQLPropertiesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSql') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
