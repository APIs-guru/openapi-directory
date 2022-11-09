import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVolumesJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetVolumesJsonHeaders;
}


export class GetVolumesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volumes?: any[];
}
