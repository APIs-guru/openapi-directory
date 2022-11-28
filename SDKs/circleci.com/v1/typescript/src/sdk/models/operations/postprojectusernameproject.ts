import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProjectUsernameProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostProjectUsernameProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_parameters" })
  buildParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parallel" })
  parallel?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class PostProjectUsernameProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectUsernameProjectPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostProjectUsernameProjectRequestBody;
}


export class PostProjectUsernameProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  buildSummary?: shared.BuildSummary;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
