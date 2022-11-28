import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersNameOrIdStopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdStopQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t" })
  t?: number;
}


export class PostContainersNameOrIdStopHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersNameOrIdStopPathParams;

  @SpeakeasyMetadata()
  queryParams: PostContainersNameOrIdStopQueryParams;

  @SpeakeasyMetadata()
  headers: PostContainersNameOrIdStopHeaders;
}


export class PostContainersNameOrIdStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
