import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVolumesFsNameJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetVolumesFsNameJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesFsNameJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVolumesFsNameJsonPathParams;

  @SpeakeasyMetadata()
  headers: GetVolumesFsNameJsonHeaders;
}


export class GetVolumesFsNameJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GetFileshareDetails })
  getFileshareDetails?: shared.GetFileshareDetails[];

  @SpeakeasyMetadata()
  statusCode: number;
}
