from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RdsDataSpec:
    r"""RdsDataSpec
    The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
    """
    
    database_credentials: RdsDatabaseCredentials = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseCredentials') }})
    database_information: RdsDatabase = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseInformation') }})
    resource_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRole') }})
    s3_staging_location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3StagingLocation') }})
    security_group_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    select_sql_query: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectSqlQuery') }})
    service_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    subnet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    data_rearrangement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRearrangement') }})
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchema') }})
    data_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchemaUri') }})
    
