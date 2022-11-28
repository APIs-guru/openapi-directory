from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListSchemasRequest:
    cluster_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    connected_database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectedDatabase') }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    schema_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaPattern') }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretArn') }})
    
