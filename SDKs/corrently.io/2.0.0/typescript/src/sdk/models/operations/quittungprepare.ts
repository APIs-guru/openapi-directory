import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuittungPrepareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;
}


export class QuittungPrepareRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: QuittungPrepareRequestBody;
}


export class QuittungPrepareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  quittungPrepare200ApplicationJsonString?: string;
}
