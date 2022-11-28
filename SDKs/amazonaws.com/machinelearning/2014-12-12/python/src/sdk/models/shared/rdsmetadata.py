from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RdsMetadata:
    r"""RdsMetadata
    The datasource details that are specific to Amazon RDS.
    """
    
    data_pipeline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataPipelineId') }})
    database: Optional[RdsDatabase] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    database_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseUserName') }})
    resource_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRole') }})
    select_sql_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectSqlQuery') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    
