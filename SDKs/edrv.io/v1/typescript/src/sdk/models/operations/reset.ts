import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ResetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: ResetRequestBody;
}


export class Reset201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class ResetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reset201ApplicationJsonObject?: Reset201ApplicationJson;
}
