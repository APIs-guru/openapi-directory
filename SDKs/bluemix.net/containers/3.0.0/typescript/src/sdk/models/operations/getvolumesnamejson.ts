import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVolumesNameJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetVolumesNameJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesNameJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVolumesNameJsonPathParams;

  @Metadata()
  headers: GetVolumesNameJsonHeaders;
}


export class GetVolumesNameJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volume?: any;
}
