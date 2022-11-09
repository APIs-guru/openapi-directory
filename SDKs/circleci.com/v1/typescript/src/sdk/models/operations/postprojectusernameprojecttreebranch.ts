import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProjectUsernameProjectTreeBranchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectTreeBranchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_parameters" })
  buildParameters?: Map<string, any>;

  @Metadata({ data: "json, name=parallel" })
  parallel?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: string;
}


export class PostProjectUsernameProjectTreeBranchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProjectUsernameProjectTreeBranchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostProjectUsernameProjectTreeBranchRequestBody;
}


export class PostProjectUsernameProjectTreeBranchResponse extends SpeakeasyBase {
  @Metadata()
  build?: shared.Build;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
