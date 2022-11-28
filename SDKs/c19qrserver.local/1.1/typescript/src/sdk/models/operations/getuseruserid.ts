import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetUserUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserUserIdPathParams;
}


export class GetUserUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;

  @SpeakeasyMetadata()
  userRecord?: shared.UserRecord;
}
