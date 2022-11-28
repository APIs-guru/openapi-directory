from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CatalogConfiguration:
    r"""CatalogConfiguration
    The configuration parameters for the default AWS Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
    """
    
    glue_data_catalog_configuration: GlueDataCatalogConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueDataCatalogConfiguration') }})
    
