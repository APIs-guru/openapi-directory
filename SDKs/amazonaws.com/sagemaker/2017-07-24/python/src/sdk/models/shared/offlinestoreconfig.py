from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OfflineStoreConfig:
    r"""OfflineStoreConfig
    <p>The configuration of an <code>OfflineStore</code>.</p> <p>Provide an <code>OfflineStoreConfig</code> in a request to <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p> <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in <code>S3StorageConfig</code>.</p>
    """
    
    s3_storage_config: S3StorageConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3StorageConfig') }})
    data_catalog_config: Optional[DataCatalogConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCatalogConfig') }})
    disable_glue_table_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableGlueTableCreation') }})
    
