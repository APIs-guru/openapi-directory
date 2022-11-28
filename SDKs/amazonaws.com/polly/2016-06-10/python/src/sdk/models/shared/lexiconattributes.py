from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LexiconAttributes:
    r"""LexiconAttributes
    Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href=\"https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html\">Managing Lexicons</a>.
    """
    
    alphabet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alphabet') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lexemes_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LexemesCount') }})
    lexicon_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LexiconArn') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    
