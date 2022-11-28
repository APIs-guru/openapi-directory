from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportResourceSpecification:
    r"""ImportResourceSpecification
    Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
    """
    
    bot_import_specification: Optional[BotImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botImportSpecification') }})
    bot_locale_import_specification: Optional[BotLocaleImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleImportSpecification') }})
    
