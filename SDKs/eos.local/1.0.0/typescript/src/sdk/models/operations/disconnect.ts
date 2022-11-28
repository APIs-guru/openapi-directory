import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisconnectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;
}


export class DisconnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DisconnectRequestBody;
}


export class DisconnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  disconnect200ApplicationJsonString?: string;
}
