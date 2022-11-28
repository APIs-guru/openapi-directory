from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RedshiftDatabase:
    r"""RedshiftDatabase
    Describes the database details required to connect to an Amazon Redshift database.
    """
    
    cluster_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    
