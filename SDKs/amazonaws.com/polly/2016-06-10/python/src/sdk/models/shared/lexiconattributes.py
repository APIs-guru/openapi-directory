from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import languagecode_enum


@dataclass_json
@dataclass
class LexiconAttributes:
    alphabet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alphabet' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lexemes_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LexemesCount' }})
    lexicon_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LexiconArn' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    
