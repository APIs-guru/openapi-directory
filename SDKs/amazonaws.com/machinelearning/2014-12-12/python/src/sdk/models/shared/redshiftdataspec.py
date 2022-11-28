from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedshiftDataSpec:
    r"""RedshiftDataSpec
    Describes the data specification of an Amazon Redshift <code>DataSource</code>.
    """
    
    database_credentials: RedshiftDatabaseCredentials = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseCredentials') }})
    database_information: RedshiftDatabase = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseInformation') }})
    s3_staging_location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3StagingLocation') }})
    select_sql_query: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectSqlQuery') }})
    data_rearrangement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRearrangement') }})
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchema') }})
    data_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchemaUri') }})
    
