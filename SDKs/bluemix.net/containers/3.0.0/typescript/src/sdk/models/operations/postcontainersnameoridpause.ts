import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdPausePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdPauseHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdPauseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdPausePathParams;

  @Metadata()
  headers: PostContainersNameOrIdPauseHeaders;
}


export class PostContainersNameOrIdPauseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
