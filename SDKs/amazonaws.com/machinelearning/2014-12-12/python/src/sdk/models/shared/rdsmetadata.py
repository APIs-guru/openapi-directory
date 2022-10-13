from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rdsdatabase


@dataclass_json
@dataclass
class RdsMetadata:
    data_pipeline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataPipelineId' }})
    database: Optional[rdsdatabase.RdsDatabase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    database_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseUserName' }})
    resource_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceRole' }})
    select_sql_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectSqlQuery' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    
