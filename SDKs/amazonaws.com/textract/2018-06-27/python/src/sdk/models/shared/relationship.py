from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Relationship:
    r"""Relationship
    <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>
    """
    
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ids') }})
    type: Optional[RelationshipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
