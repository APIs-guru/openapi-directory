import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MeteringPostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=1.8.0" })
  one80?: number;

  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=energy" })
  energy?: number;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}


export class MeteringPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: MeteringPostRequestBody;
}


export class MeteringPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=1.8.0" })
  one80?: number;

  @Metadata({ data: "json, name=1.8.1" })
  one81?: number;

  @Metadata({ data: "json, name=1.8.2" })
  one82?: number;

  @Metadata({ data: "json, name=_processingTime" })
  processingTime?: number;

  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=co2_g_oekostrom" })
  co2GOekostrom?: number;

  @Metadata({ data: "json, name=co2_g_standard" })
  co2GStandard?: number;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: number;
}


export class MeteringPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  meteringPost200ApplicationJsonObject?: MeteringPost200ApplicationJson;
}
