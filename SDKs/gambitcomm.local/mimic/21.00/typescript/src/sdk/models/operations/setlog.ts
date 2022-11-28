import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class SetLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setLog200ApplicationJsonString?: string;
}
