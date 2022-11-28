from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RedshiftDatabaseCredentials:
    r"""RedshiftDatabaseCredentials
    Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
