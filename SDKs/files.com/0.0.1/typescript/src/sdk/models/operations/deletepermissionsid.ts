import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePermissionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePermissionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePermissionsIdPathParams;
}


export class DeletePermissionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
