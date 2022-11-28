from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionCredential:
    r"""ConnectionCredential
    Credential to use with a connection.
    """
    
    cloud_sql: Optional[CloudSQLCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSql') }})
    
