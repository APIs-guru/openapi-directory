from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import redshiftdatabasecredentials
from . import redshiftdatabase


@dataclass_json
@dataclass
class RedshiftDataSpec:
    data_rearrangement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRearrangement' }})
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSchema' }})
    data_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSchemaUri' }})
    database_credentials: redshiftdatabasecredentials.RedshiftDatabaseCredentials = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseCredentials' }})
    database_information: redshiftdatabase.RedshiftDatabase = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseInformation' }})
    s3_staging_location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3StagingLocation' }})
    select_sql_query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectSqlQuery' }})
    
