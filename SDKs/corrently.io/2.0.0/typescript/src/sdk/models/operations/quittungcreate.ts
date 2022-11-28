import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuittungCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


export class QuittungCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: QuittungCreateRequestBody;
}


export class QuittungCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  quittungCreate200ApplicationJsonString?: string;
}
