import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserRequestsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUserRequestsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserRequestsIdPathParams;
}


export class GetUserRequestsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userRequestEntity?: shared.UserRequestEntity;
}
