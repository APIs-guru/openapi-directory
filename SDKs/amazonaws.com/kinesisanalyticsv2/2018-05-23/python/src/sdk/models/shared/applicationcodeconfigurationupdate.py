from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationCodeConfigurationUpdate:
    r"""ApplicationCodeConfigurationUpdate
    Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.
    """
    
    code_content_type_update: Optional[CodeContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeContentTypeUpdate') }})
    code_content_update: Optional[CodeContentUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeContentUpdate') }})
    
