from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CatalogConfigurationUpdate:
    r"""CatalogConfigurationUpdate
    Updates to 
    """
    
    glue_data_catalog_configuration_update: GlueDataCatalogConfigurationUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueDataCatalogConfigurationUpdate') }})
    
