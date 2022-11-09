import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteImagesIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteImagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteImagesIdPathParams;

  @Metadata()
  headers: DeleteImagesIdHeaders;
}


export class DeleteImagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
