from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datacatalogconfig
from . import s3storageconfig


@dataclass_json
@dataclass
class OfflineStoreConfig:
    data_catalog_config: Optional[datacatalogconfig.DataCatalogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCatalogConfig' }})
    disable_glue_table_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableGlueTableCreation' }})
    s3_storage_config: s3storageconfig.S3StorageConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3StorageConfig' }})
    
