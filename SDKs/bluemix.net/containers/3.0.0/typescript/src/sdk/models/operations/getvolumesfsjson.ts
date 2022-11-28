import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVolumesFsJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesFsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetVolumesFsJsonHeaders;
}


export class GetVolumesFsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Fileshare })
  fileshares?: shared.Fileshare[];

  @SpeakeasyMetadata()
  statusCode: number;
}
