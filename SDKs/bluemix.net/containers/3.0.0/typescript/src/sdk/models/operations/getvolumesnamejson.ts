import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVolumesNameJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetVolumesNameJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesNameJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVolumesNameJsonPathParams;

  @SpeakeasyMetadata()
  headers: GetVolumesNameJsonHeaders;
}


export class GetVolumesNameJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volume?: any;
}
