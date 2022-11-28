from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateAppRequest:
    app_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    app_source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppSource') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    data_sources: Optional[List[DataSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSources') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    enable_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSsl') }})
    environment: Optional[List[EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    ssl_configuration: Optional[SslConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslConfiguration') }})
    type: Optional[AppTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
