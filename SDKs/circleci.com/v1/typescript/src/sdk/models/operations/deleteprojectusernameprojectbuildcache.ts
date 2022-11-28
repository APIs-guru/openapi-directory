import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectUsernameProjectBuildCachePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteProjectUsernameProjectBuildCache200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class DeleteProjectUsernameProjectBuildCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectUsernameProjectBuildCachePathParams;
}


export class DeleteProjectUsernameProjectBuildCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProjectUsernameProjectBuildCache200ApplicationJsonObject?: DeleteProjectUsernameProjectBuildCache200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
