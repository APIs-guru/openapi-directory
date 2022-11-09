import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProjectUsernameProjectBuildNumRetryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=build_num" })
  buildNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectBuildNumRetryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProjectUsernameProjectBuildNumRetryPathParams;
}


export class PostProjectUsernameProjectBuildNumRetryResponse extends SpeakeasyBase {
  @Metadata()
  build?: shared.Build;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
