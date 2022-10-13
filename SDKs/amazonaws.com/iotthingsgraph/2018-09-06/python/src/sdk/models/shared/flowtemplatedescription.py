from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import definitiondocument
from . import flowtemplatesummary


@dataclass_json
@dataclass
class FlowTemplateDescription:
    definition: Optional[definitiondocument.DefinitionDocument] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    summary: Optional[flowtemplatesummary.FlowTemplateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    validated_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedNamespaceVersion' }})
    
