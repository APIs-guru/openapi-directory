import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint: string;
}


export class ConnectRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ConnectRequestBody;
}


export class ConnectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  connect200ApplicationJsonString?: string;
}
