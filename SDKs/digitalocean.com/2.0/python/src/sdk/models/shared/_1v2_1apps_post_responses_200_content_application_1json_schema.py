from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import _1v2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items


@dataclass_json
@dataclass
class Onev21appsPostResponses200ContentApplication1jsonSchema:
    app: Optional[_1v2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    
