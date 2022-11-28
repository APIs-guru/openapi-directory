from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1GraphQlOperation:
    r"""GoogleCloudApigeeV1GraphQlOperation
    Represents the pairing of GraphQL operation types and the GraphQL operation name.
    """
    
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    operation_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationTypes') }})
    
