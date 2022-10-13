from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import wkhtmltopdfadvancedoptions


@dataclass_json
@dataclass
class WkHTMLToPdfURLToPdfRequest:
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    inline_pdf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlinePdf' }})
    options: Optional[wkhtmltopdfadvancedoptions.WkHTMLToPdfAdvancedOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
