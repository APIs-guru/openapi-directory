import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;
}


export class ConnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ConnectRequestBody;
}


export class ConnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  connect200ApplicationJsonString?: string;
}
