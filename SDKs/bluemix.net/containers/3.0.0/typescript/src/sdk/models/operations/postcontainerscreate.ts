import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class PostContainersCreateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersCreateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostContainersCreateQueryParams;

  @Metadata()
  headers: PostContainersCreateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostContainersCreateResponse extends SpeakeasyBase {
  @Metadata()
  containerId?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
