import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProjectUsernameProjectTreeBranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectTreeBranchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_parameters" })
  buildParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parallel" })
  parallel?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}


export class PostProjectUsernameProjectTreeBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectUsernameProjectTreeBranchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostProjectUsernameProjectTreeBranchRequestBody;
}


export class PostProjectUsernameProjectTreeBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  build?: shared.Build;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
