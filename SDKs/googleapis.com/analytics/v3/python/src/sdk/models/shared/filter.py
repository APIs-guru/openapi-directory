from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import filterexpression
from . import filterexpression


@dataclass_json
@dataclass
class FilterAdvancedDetails:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    extract_a: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractA' }})
    extract_b: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractB' }})
    field_a: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldA' }})
    field_a_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldAIndex' }})
    field_a_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldARequired' }})
    field_b: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldB' }})
    field_b_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldBIndex' }})
    field_b_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldBRequired' }})
    output_constructor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConstructor' }})
    output_to_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputToField' }})
    output_to_field_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputToFieldIndex' }})
    override_output_field: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideOutputField' }})
    

@dataclass_json
@dataclass
class FilterLowercaseDetails:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    field_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldIndex' }})
    

@dataclass_json
@dataclass
class FilterParentLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class FilterSearchAndReplaceDetails:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    field_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldIndex' }})
    replace_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceString' }})
    search_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchString' }})
    

@dataclass_json
@dataclass
class FilterUppercaseDetails:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    field_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldIndex' }})
    

@dataclass_json
@dataclass
class Filter:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advanced_details: Optional[FilterAdvancedDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advancedDetails' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exclude_details: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeDetails' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    include_details: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeDetails' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    lowercase_details: Optional[FilterLowercaseDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowercaseDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_link: Optional[FilterParentLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLink' }})
    search_and_replace_details: Optional[FilterSearchAndReplaceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchAndReplaceDetails' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uppercase_details: Optional[FilterUppercaseDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uppercaseDetails' }})
    
