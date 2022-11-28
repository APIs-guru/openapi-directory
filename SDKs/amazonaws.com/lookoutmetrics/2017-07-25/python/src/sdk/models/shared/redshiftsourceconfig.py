from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedshiftSourceConfig:
    r"""RedshiftSourceConfig
    Provides information about the Amazon Redshift database configuration.
    """
    
    cluster_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    database_host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseHost') }})
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    database_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabasePort') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    secret_manager_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretManagerArn') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    vpc_configuration: VpcConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfiguration') }})
    
