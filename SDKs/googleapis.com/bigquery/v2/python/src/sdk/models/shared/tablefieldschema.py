from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableFieldSchemaCategories:
    r"""TableFieldSchemaCategories
    [Optional] The categories attached to this field, used for field-level access control.
    """
    
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    

@dataclass_json
@dataclass
class TableFieldSchemaPolicyTags:
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    

@dataclass_json
@dataclass
class TableFieldSchema:
    categories: Optional[TableFieldSchemaCategories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collation') }})
    default_value_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueExpression') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fields: Optional[List[TableFieldSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    max_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLength') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy_tags: Optional[TableFieldSchemaPolicyTags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTags') }})
    precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    scale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
