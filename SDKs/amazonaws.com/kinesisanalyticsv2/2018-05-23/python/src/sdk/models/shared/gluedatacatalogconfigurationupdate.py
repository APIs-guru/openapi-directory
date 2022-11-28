from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GlueDataCatalogConfigurationUpdate:
    r"""GlueDataCatalogConfigurationUpdate
    Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
    """
    
    database_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseARNUpdate') }})
    
