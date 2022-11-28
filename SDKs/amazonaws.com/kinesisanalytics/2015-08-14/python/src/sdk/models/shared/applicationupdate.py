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
class ApplicationUpdate:
    r"""ApplicationUpdate
    Describes updates to apply to an existing Amazon Kinesis Analytics application.
    """
    
    application_code_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeUpdate') }})
    cloud_watch_logging_option_updates: Optional[List[CloudWatchLoggingOptionUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionUpdates') }})
    input_updates: Optional[List[InputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputUpdates') }})
    output_updates: Optional[List[OutputUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUpdates') }})
    reference_data_source_updates: Optional[List[ReferenceDataSourceUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSourceUpdates') }})
    
