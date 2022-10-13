from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentdimensions
from . import textsnippet
from . import documentinputconfig
from . import layout


@dataclass_json
@dataclass
class Document:
    document_dimensions: Optional[documentdimensions.DocumentDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentDimensions' }})
    document_text: Optional[textsnippet.TextSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentText' }})
    input_config: Optional[documentinputconfig.DocumentInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    layout: Optional[List[layout.Layout]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    page_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCount' }})
    
