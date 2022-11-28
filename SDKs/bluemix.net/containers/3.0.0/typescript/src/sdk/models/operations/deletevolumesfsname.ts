import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVolumesFsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteVolumesFsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteVolumesFsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVolumesFsNamePathParams;

  @SpeakeasyMetadata()
  headers: DeleteVolumesFsNameHeaders;
}


export class DeleteVolumesFsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
