import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostLoginSampleSourceEnum {
    IOs = "iOS",
    Android = "android",
    Web = "web"
}


export class PostLoginSample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: PostLoginSampleSourceEnum;
}


export class PostLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostLoginSample;
}


export class PostLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;

  @SpeakeasyMetadata()
  loginResponse?: shared.LoginResponse;
}
