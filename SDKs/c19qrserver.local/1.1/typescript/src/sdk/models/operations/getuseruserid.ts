import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetUserUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserUserIdPathParams;
}


export class GetUserUserIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;

  @Metadata()
  userRecord?: shared.UserRecord;
}
