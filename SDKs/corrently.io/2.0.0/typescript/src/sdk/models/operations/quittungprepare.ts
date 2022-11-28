import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuittungPrepareRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;
}


export class QuittungPrepareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: QuittungPrepareRequestBody;
}


export class QuittungPrepareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  quittungPrepare200ApplicationJsonString?: string;
}
