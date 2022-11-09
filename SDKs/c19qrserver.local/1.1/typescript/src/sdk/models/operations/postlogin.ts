import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostLoginSampleSourceEnum {
    IOs = "iOS"
,    Android = "android"
,    Web = "web"
}


export class PostLoginSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=source" })
  source?: PostLoginSampleSourceEnum;
}


export class PostLoginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostLoginSample;
}


export class PostLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;

  @Metadata()
  loginResponse?: shared.LoginResponse;
}
