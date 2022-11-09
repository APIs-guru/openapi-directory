import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetImagesJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetImagesJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetImagesJsonHeaders;
}


export class GetImagesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageInfo?: any;

  @Metadata()
  statusCode: number;
}
