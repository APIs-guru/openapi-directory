from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import botimportspecification
from . import botlocaleimportspecification


@dataclass_json
@dataclass
class ImportResourceSpecification:
    bot_import_specification: Optional[botimportspecification.BotImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botImportSpecification' }})
    bot_locale_import_specification: Optional[botlocaleimportspecification.BotLocaleImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleImportSpecification' }})
    
