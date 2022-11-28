from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportResourceSpecification:
    r"""ExportResourceSpecification
    Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
    """
    
    bot_export_specification: Optional[BotExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botExportSpecification') }})
    bot_locale_export_specification: Optional[BotLocaleExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleExportSpecification') }})
    
