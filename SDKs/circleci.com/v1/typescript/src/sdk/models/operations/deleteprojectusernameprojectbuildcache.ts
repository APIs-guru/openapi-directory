import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectUsernameProjectBuildCachePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteProjectUsernameProjectBuildCacheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProjectUsernameProjectBuildCachePathParams;
}


export class DeleteProjectUsernameProjectBuildCache200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class DeleteProjectUsernameProjectBuildCacheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProjectUsernameProjectBuildCache200ApplicationJsonObject?: DeleteProjectUsernameProjectBuildCache200ApplicationJson;

  @Metadata()
  statusCode: number;
}
