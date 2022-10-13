from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datedetails
from . import labeleditem
from . import lookupdetails
from . import relationshipdetails


@dataclass_json
@dataclass
class ColumnDescription:
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    date_details: Optional[datedetails.DateDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateDetails' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[List[labeleditem.LabeledItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lookup_details: Optional[lookupdetails.LookupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookupDetails' }})
    multiple_values_disallowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipleValuesDisallowed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonly' }})
    relationship_details: Optional[relationshipdetails.RelationshipDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipDetails' }})
    
