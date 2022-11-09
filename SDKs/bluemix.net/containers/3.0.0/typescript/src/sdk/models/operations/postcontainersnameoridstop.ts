import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdStopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdStopQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=t" })
  t?: number;
}


export class PostContainersNameOrIdStopHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdStopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdStopPathParams;

  @Metadata()
  queryParams: PostContainersNameOrIdStopQueryParams;

  @Metadata()
  headers: PostContainersNameOrIdStopHeaders;
}


export class PostContainersNameOrIdStopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
