from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import redshiftdatabase


@dataclass_json
@dataclass
class RedshiftMetadata:
    database_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseUserName' }})
    redshift_database: Optional[redshiftdatabase.RedshiftDatabase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftDatabase' }})
    select_sql_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectSqlQuery' }})
    
