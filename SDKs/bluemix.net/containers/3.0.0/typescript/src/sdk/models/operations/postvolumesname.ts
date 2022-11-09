import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostVolumesNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostVolumesNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostVolumesNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVolumesNamePathParams;

  @Metadata()
  headers: PostVolumesNameHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostVolumesNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volume?: any;
}
