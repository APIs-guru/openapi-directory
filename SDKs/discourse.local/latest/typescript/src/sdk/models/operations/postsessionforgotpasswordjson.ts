import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSessionForgotPasswordJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSessionForgotPasswordJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSessionForgotPasswordJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
