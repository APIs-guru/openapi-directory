from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PatchChargeStationVariablePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    variable: Optional[PatchChargeStationVariableRequestBodyVariableEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variable' }})
    

@dataclass
class PatchChargeStationVariableRequest:
    path_params: PatchChargeStationVariablePathParams = field(default=None)
    request: PatchChargeStationVariableRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PatchChargeStationVariable201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PatchChargeStationVariableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    patch_charge_station_variable_201_application_json_object: Optional[PatchChargeStationVariable201ApplicationJSON] = field(default=None)
    
