from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListSchemasRequest:
    cluster_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    connected_database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectedDatabase' }})
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schema_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaPattern' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretArn' }})
    
