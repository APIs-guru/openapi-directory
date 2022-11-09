import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProjectUsernameProjectCheckoutKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum PostProjectUsernameProjectCheckoutKeyRequestBodyEnum {
    DeployKey = "deploy-key"
,    GithubUserKey = "github-user-key"
}


export class PostProjectUsernameProjectCheckoutKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProjectUsernameProjectCheckoutKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostProjectUsernameProjectCheckoutKeyRequestBodyEnum;
}


export class PostProjectUsernameProjectCheckoutKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  key?: shared.Key;

  @Metadata()
  statusCode: number;
}
