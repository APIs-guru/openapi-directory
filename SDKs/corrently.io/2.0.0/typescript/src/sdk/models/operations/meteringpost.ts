import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MeteringPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=1.8.0" })
  one80?: number;

  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=energy" })
  energy?: number;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


export class MeteringPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=1.8.0" })
  one80?: number;

  @SpeakeasyMetadata({ data: "json, name=1.8.1" })
  one81?: number;

  @SpeakeasyMetadata({ data: "json, name=1.8.2" })
  one82?: number;

  @SpeakeasyMetadata({ data: "json, name=_processingTime" })
  processingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=co2_g_oekostrom" })
  co2GOekostrom?: number;

  @SpeakeasyMetadata({ data: "json, name=co2_g_standard" })
  co2GStandard?: number;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp?: number;
}


export class MeteringPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: MeteringPostRequestBody;
}


export class MeteringPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  meteringPost200ApplicationJsonObject?: MeteringPost200ApplicationJson;
}
