import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVolumesFsFlavorsJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetVolumesFsFlavorsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetVolumesFsFlavorsJsonHeaders;
}


export class GetVolumesFsFlavorsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getVolumesFsFlavorsJson200ApplicationJsonIntegers?: number[];

  @SpeakeasyMetadata()
  statusCode: number;
}
