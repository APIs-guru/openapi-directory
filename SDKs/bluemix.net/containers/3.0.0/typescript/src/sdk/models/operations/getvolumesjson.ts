import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVolumesJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetVolumesJsonHeaders;
}


export class GetVolumesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volumes?: any[];
}
