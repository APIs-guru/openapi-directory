from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _1v2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum

class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum(str, Enum):
    ATTACH = "attach"
    DETACH = "detach"
    RESIZE = "resize"


@dataclass_json
@dataclass
class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0:
    droplet_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    region: Optional[_1v2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
