from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import gluedatacatalogconfiguration


@dataclass_json
@dataclass
class CatalogConfiguration:
    glue_data_catalog_configuration: gluedatacatalogconfiguration.GlueDataCatalogConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueDataCatalogConfiguration' }})
    
