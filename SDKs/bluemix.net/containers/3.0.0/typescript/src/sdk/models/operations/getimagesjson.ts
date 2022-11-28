import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagesJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetImagesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetImagesJsonHeaders;
}


export class GetImagesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageInfo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
