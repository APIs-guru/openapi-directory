import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVolumesFsJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesFsJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetVolumesFsJsonHeaders;
}


export class GetVolumesFsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Fileshare })
  fileshares?: shared.Fileshare[];

  @Metadata()
  statusCode: number;
}
