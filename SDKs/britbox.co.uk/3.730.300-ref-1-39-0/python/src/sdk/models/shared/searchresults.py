from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import itemlist
from . import itemlist
from . import itemlist
from . import person
from . import itemlist


@dataclass_json
@dataclass
class SearchResults:
    items: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    movies: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'movies' }})
    other: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other' }})
    people: Optional[List[person.Person]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'people' }})
    term: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    tv: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tv' }})
    
