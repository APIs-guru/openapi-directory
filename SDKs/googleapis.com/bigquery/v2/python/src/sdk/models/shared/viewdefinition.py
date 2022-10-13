from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userdefinedfunctionresource


@dataclass_json
@dataclass
class ViewDefinition:
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    use_explicit_column_names: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useExplicitColumnNames' }})
    use_legacy_sql: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLegacySql' }})
    user_defined_function_resources: Optional[List[userdefinedfunctionresource.UserDefinedFunctionResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefinedFunctionResources' }})
    
