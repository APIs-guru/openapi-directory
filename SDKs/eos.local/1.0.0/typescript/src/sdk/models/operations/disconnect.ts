import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisconnectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint: string;
}


export class DisconnectRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: DisconnectRequestBody;
}


export class DisconnectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  disconnect200ApplicationJsonString?: string;
}
