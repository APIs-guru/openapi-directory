import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUsersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteUsersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUsersIdPathParams;
}


export class DeleteUsersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
