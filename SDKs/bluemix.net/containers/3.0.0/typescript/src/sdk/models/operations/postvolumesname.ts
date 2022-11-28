import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostVolumesNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostVolumesNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostVolumesNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVolumesNamePathParams;

  @SpeakeasyMetadata()
  headers: PostVolumesNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostVolumesNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volume?: any;
}
