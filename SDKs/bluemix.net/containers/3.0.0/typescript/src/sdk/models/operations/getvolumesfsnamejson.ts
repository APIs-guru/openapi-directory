import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVolumesFsNameJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetVolumesFsNameJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesFsNameJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVolumesFsNameJsonPathParams;

  @Metadata()
  headers: GetVolumesFsNameJsonHeaders;
}


export class GetVolumesFsNameJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GetFileshareDetails })
  getFileshareDetails?: shared.GetFileshareDetails[];

  @Metadata()
  statusCode: number;
}
