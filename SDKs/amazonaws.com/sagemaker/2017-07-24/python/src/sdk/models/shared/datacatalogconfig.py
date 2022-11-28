from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataCatalogConfig:
    r"""DataCatalogConfig
    The meta data of the Glue table which serves as data catalog for the <code>OfflineStore</code>. 
    """
    
    catalog: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Catalog') }})
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
