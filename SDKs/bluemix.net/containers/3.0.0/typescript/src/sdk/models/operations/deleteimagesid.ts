import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteImagesIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteImagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImagesIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteImagesIdHeaders;
}


export class DeleteImagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
