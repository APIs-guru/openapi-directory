from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntitySummary:
    r"""EntitySummary
    This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
    """
    
    entity_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityArn') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityType') }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Visibility') }})
    
