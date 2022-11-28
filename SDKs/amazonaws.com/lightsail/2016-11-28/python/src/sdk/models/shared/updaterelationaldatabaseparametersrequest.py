from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRelationalDatabaseParametersRequest:
    parameters: List[RelationalDatabaseParameter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    relational_database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    
