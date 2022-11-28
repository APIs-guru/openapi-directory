from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReferenceDataSourceUpdate:
    r"""ReferenceDataSourceUpdate
    When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
    """
    
    reference_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    reference_schema_update: Optional[SourceSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceSchemaUpdate') }})
    s3_reference_data_source_update: Optional[S3ReferenceDataSourceUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ReferenceDataSourceUpdate') }})
    table_name_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableNameUpdate') }})
    
