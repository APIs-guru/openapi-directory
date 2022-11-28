import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchChargeStationVariablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PatchChargeStationVariableRequestBodyVariableEnum {
    MeterValueSampleInterval = "MeterValueSampleInterval",
    HeartbeatInterval = "HeartbeatInterval",
    ConnectionTimeOut = "ConnectionTimeOut",
    WebSocketPingInterval = "WebSocketPingInterval",
    TransactionMessageRetryInterval = "TransactionMessageRetryInterval",
    TransactionMessageAttempts = "TransactionMessageAttempts"
}


export class PatchChargeStationVariableRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=variable" })
  variable?: PatchChargeStationVariableRequestBodyVariableEnum;
}


export class PatchChargeStationVariable201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PatchChargeStationVariableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchChargeStationVariablePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchChargeStationVariableRequestBody;
}


export class PatchChargeStationVariableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchChargeStationVariable201ApplicationJsonObject?: PatchChargeStationVariable201ApplicationJson;
}
