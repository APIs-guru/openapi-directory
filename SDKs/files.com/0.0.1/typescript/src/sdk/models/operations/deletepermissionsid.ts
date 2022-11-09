import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePermissionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePermissionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePermissionsIdPathParams;
}


export class DeletePermissionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
