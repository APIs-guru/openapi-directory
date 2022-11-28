import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class PostContainersCreateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostContainersCreateQueryParams;

  @SpeakeasyMetadata()
  headers: PostContainersCreateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostContainersCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerId?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
