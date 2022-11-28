from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RdsDatabaseCredentials:
    r"""RdsDatabaseCredentials
    The database credentials to connect to a database on an RDS DB instance.
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
