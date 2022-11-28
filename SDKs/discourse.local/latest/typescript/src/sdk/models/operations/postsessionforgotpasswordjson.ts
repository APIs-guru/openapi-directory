import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSessionForgotPasswordJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSessionForgotPasswordJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSessionForgotPasswordJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
