from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLApplicationConfigurationUpdate:
    r"""SQLApplicationConfigurationUpdate
    Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
    """
    
    input_updates: Optional[List[InputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputUpdates') }})
    output_updates: Optional[List[OutputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUpdates') }})
    reference_data_source_updates: Optional[List[ReferenceDataSourceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSourceUpdates') }})
    
