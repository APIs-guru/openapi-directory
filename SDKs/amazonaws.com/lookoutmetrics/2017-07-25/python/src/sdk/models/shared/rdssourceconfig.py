from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import vpcconfiguration


@dataclass_json
@dataclass
class RdsSourceConfig:
    db_instance_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DBInstanceIdentifier' }})
    database_host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseHost' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    database_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabasePort' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    secret_manager_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretManagerArn' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    vpc_configuration: vpcconfiguration.VpcConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfiguration' }})
    
