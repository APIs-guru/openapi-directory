import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProjectUsernameProjectCheckoutKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum PostProjectUsernameProjectCheckoutKeyRequestBodyEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}


export class PostProjectUsernameProjectCheckoutKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectUsernameProjectCheckoutKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostProjectUsernameProjectCheckoutKeyRequestBodyEnum;
}


export class PostProjectUsernameProjectCheckoutKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  key?: shared.Key;

  @SpeakeasyMetadata()
  statusCode: number;
}
