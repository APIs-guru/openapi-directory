from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import gluedatacatalogconfigurationdescription


@dataclass_json
@dataclass
class CatalogConfigurationDescription:
    glue_data_catalog_configuration_description: gluedatacatalogconfigurationdescription.GlueDataCatalogConfigurationDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueDataCatalogConfigurationDescription' }})
    
