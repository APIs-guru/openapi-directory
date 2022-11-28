from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DataSourceAuthorizationTypeEnum(str, Enum):
    AUTHORIZATION_TYPE_UNSPECIFIED = "AUTHORIZATION_TYPE_UNSPECIFIED"
    AUTHORIZATION_CODE = "AUTHORIZATION_CODE"
    GOOGLE_PLUS_AUTHORIZATION_CODE = "GOOGLE_PLUS_AUTHORIZATION_CODE"
    FIRST_PARTY_OAUTH = "FIRST_PARTY_OAUTH"

class DataSourceDataRefreshTypeEnum(str, Enum):
    DATA_REFRESH_TYPE_UNSPECIFIED = "DATA_REFRESH_TYPE_UNSPECIFIED"
    SLIDING_WINDOW = "SLIDING_WINDOW"
    CUSTOM_SLIDING_WINDOW = "CUSTOM_SLIDING_WINDOW"

class DataSourceTransferTypeEnum(str, Enum):
    TRANSFER_TYPE_UNSPECIFIED = "TRANSFER_TYPE_UNSPECIFIED"
    BATCH = "BATCH"
    STREAMING = "STREAMING"


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    Defines the properties and custom parameters for a data source.
    """
    
    authorization_type: Optional[DataSourceAuthorizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationType') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    data_refresh_type: Optional[DataSourceDataRefreshTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRefreshType') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    default_data_refresh_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultDataRefreshWindowDays') }})
    default_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSchedule') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    help_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpUrl') }})
    manual_runs_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualRunsDisabled') }})
    minimum_schedule_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumScheduleInterval') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[List[DataSourceParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    supports_custom_schedule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsCustomSchedule') }})
    supports_multiple_transfers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsMultipleTransfers') }})
    transfer_type: Optional[DataSourceTransferTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferType') }})
    update_deadline_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeadlineSeconds') }})
    
