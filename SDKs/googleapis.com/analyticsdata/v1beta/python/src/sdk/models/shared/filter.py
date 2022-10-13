from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import betweenfilter
from . import inlistfilter
from . import numericfilter
from . import stringfilter


@dataclass_json
@dataclass
class Filter:
    between_filter: Optional[betweenfilter.BetweenFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'betweenFilter' }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    in_list_filter: Optional[inlistfilter.InListFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inListFilter' }})
    numeric_filter: Optional[numericfilter.NumericFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericFilter' }})
    string_filter: Optional[stringfilter.StringFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringFilter' }})
    
