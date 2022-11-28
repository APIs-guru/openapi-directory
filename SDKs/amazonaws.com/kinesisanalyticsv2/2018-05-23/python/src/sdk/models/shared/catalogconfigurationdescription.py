from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CatalogConfigurationDescription:
    r"""CatalogConfigurationDescription
    The configuration parameters for the default AWS Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
    """
    
    glue_data_catalog_configuration_description: GlueDataCatalogConfigurationDescription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueDataCatalogConfigurationDescription') }})
    
