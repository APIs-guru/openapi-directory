import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProjectUsernameProjectBuildNumCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=build_num" })
  buildNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectBuildNumCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectUsernameProjectBuildNumCancelPathParams;
}


export class PostProjectUsernameProjectBuildNumCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  build?: shared.Build;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
