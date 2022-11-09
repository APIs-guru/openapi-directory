import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdStartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdStartHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdStartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdStartPathParams;

  @Metadata()
  headers: PostContainersNameOrIdStartHeaders;
}


export class PostContainersNameOrIdStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
