from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import document
from . import image
from . import row
from . import textsnippet


@dataclass_json
@dataclass
class ExamplePayload:
    document: Optional[document.Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    row: Optional[row.Row] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row' }})
    text_snippet: Optional[textsnippet.TextSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSnippet' }})
    
