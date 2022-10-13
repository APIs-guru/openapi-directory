from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rdsdatabasecredentials
from . import rdsdatabase


@dataclass_json
@dataclass
class RdsDataSpec:
    data_rearrangement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRearrangement' }})
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSchema' }})
    data_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSchemaUri' }})
    database_credentials: rdsdatabasecredentials.RdsDatabaseCredentials = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseCredentials' }})
    database_information: rdsdatabase.RdsDatabase = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseInformation' }})
    resource_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceRole' }})
    s3_staging_location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3StagingLocation' }})
    security_group_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    select_sql_query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectSqlQuery' }})
    service_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    subnet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    
