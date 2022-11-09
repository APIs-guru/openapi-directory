import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchChargeStationVariablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PatchChargeStationVariableRequestBodyVariableEnum {
    MeterValueSampleInterval = "MeterValueSampleInterval"
,    HeartbeatInterval = "HeartbeatInterval"
,    ConnectionTimeOut = "ConnectionTimeOut"
,    WebSocketPingInterval = "WebSocketPingInterval"
,    TransactionMessageRetryInterval = "TransactionMessageRetryInterval"
,    TransactionMessageAttempts = "TransactionMessageAttempts"
}


export class PatchChargeStationVariableRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=variable" })
  variable?: PatchChargeStationVariableRequestBodyVariableEnum;
}


export class PatchChargeStationVariableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchChargeStationVariablePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchChargeStationVariableRequestBody;
}


export class PatchChargeStationVariable201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PatchChargeStationVariableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchChargeStationVariable201ApplicationJsonObject?: PatchChargeStationVariable201ApplicationJson;
}
