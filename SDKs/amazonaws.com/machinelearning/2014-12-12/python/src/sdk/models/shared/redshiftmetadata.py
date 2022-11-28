from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedshiftMetadata:
    r"""RedshiftMetadata
    Describes the <code>DataSource</code> details specific to Amazon Redshift.
    """
    
    database_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseUserName') }})
    redshift_database: Optional[RedshiftDatabase] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDatabase') }})
    select_sql_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectSqlQuery') }})
    
