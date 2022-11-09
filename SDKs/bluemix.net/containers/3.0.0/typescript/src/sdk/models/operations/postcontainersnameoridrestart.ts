import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdRestartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdRestartQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=t" })
  t?: number;
}


export class PostContainersNameOrIdRestartHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdRestartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdRestartPathParams;

  @Metadata()
  queryParams: PostContainersNameOrIdRestartQueryParams;

  @Metadata()
  headers: PostContainersNameOrIdRestartHeaders;
}


export class PostContainersNameOrIdRestartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
