import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserRequestsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteUserRequestsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserRequestsIdPathParams;
}


export class DeleteUserRequestsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
