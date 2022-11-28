import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVolumesNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteVolumesNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteVolumesNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVolumesNamePathParams;

  @SpeakeasyMetadata()
  headers: DeleteVolumesNameHeaders;
}


export class DeleteVolumesNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
