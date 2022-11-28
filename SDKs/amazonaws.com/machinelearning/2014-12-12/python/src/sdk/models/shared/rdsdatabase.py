from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RdsDatabase:
    r"""RdsDatabase
    The database details of an Amazon RDS database.
    """
    
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    instance_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIdentifier') }})
    
