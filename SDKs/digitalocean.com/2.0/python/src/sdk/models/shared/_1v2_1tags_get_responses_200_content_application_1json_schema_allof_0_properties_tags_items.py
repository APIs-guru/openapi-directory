from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import _1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0
from . import _1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0
from . import _1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0
from . import _1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0
from . import _1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0


@dataclass_json
@dataclass
class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    databases: Optional[_1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databases' }})
    droplets: Optional[_1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplets' }})
    imgages: Optional[_1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imgages' }})
    last_tagged_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_tagged_uri' }})
    volume_snapshots: Optional[_1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume_snapshots' }})
    volumes: Optional[_1v2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items_properties_resources_allof_0.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resources: Optional[Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
