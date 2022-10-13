from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import botexportspecification
from . import botlocaleexportspecification


@dataclass_json
@dataclass
class ExportResourceSpecification:
    bot_export_specification: Optional[botexportspecification.BotExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botExportSpecification' }})
    bot_locale_export_specification: Optional[botlocaleexportspecification.BotLocaleExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleExportSpecification' }})
    
