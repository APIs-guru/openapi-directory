from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lexicon
from . import lexiconattributes


@dataclass_json
@dataclass
class GetLexiconOutput:
    lexicon: Optional[lexicon.Lexicon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lexicon' }})
    lexicon_attributes: Optional[lexiconattributes.LexiconAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LexiconAttributes' }})
    
