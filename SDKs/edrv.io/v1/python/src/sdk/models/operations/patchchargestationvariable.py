from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PatchChargeStationVariablePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchChargeStationVariableRequestBodyVariableEnum(str, Enum):
    METER_VALUE_SAMPLE_INTERVAL = "MeterValueSampleInterval"
    HEARTBEAT_INTERVAL = "HeartbeatInterval"
    CONNECTION_TIME_OUT = "ConnectionTimeOut"
    WEB_SOCKET_PING_INTERVAL = "WebSocketPingInterval"
    TRANSACTION_MESSAGE_RETRY_INTERVAL = "TransactionMessageRetryInterval"
    TRANSACTION_MESSAGE_ATTEMPTS = "TransactionMessageAttempts"


@dataclass_json
@dataclass
class PatchChargeStationVariableRequestBody:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    variable: Optional[PatchChargeStationVariableRequestBodyVariableEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variable') }})
    

@dataclass_json
@dataclass
class PatchChargeStationVariable201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PatchChargeStationVariableRequest:
    path_params: PatchChargeStationVariablePathParams = field()
    request: PatchChargeStationVariableRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchChargeStationVariableResponse:
    content_type: str = field()
    status_code: int = field()
    patch_charge_station_variable_201_application_json_object: Optional[PatchChargeStationVariable201ApplicationJSON] = field(default=None)
    
