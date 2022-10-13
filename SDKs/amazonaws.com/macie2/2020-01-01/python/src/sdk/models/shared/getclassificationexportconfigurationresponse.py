from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationexportconfiguration


@dataclass_json
@dataclass
class GetClassificationExportConfigurationResponse:
    configuration: Optional[classificationexportconfiguration.ClassificationExportConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    
