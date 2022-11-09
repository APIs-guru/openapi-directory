import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVolumesFsFlavorsJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesFsFlavorsJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetVolumesFsFlavorsJsonHeaders;
}


export class GetVolumesFsFlavorsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getVolumesFsFlavorsJson200ApplicationJsonIntegers?: number[];

  @Metadata()
  statusCode: number;
}
