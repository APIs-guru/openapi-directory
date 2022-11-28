import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReserveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @SpeakeasyMetadata({ data: "json, name=connector" })
  connector?: string;

  @SpeakeasyMetadata({ data: "json, name=driver" })
  driver?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class Reserve201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class ReserveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ReserveRequestBody;
}


export class ReserveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reserve201ApplicationJsonObject?: Reserve201ApplicationJson;
}
