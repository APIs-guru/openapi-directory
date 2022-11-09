import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuittungCreateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class QuittungCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: QuittungCreateRequestBody;
}


export class QuittungCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  quittungCreate200ApplicationJsonString?: string;
}
