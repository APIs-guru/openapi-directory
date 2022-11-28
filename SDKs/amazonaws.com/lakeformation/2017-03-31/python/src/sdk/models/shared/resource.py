from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    A structure for the resource.
    """
    
    catalog: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Catalog') }})
    data_location: Optional[DataLocationResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLocation') }})
    database: Optional[DatabaseResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    lf_tag: Optional[LfTagKeyResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTag') }})
    lf_tag_policy: Optional[LfTagPolicyResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagPolicy') }})
    table: Optional[TableResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Table') }})
    table_with_columns: Optional[TableWithColumnsResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableWithColumns') }})
    
