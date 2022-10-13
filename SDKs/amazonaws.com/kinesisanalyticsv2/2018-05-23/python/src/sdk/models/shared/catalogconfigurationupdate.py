from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import gluedatacatalogconfigurationupdate


@dataclass_json
@dataclass
class CatalogConfigurationUpdate:
    glue_data_catalog_configuration_update: gluedatacatalogconfigurationupdate.GlueDataCatalogConfigurationUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueDataCatalogConfigurationUpdate' }})
    
