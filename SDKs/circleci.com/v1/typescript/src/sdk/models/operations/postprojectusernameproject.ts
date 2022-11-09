import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProjectUsernameProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=build_parameters" })
  buildParameters?: Map<string, any>;

  @Metadata({ data: "json, name=parallel" })
  parallel?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}


export class PostProjectUsernameProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProjectUsernameProjectPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostProjectUsernameProjectRequestBody;
}


export class PostProjectUsernameProjectResponse extends SpeakeasyBase {
  @Metadata()
  buildSummary?: shared.BuildSummary;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
