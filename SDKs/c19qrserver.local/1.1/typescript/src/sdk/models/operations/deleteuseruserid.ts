import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteUserUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class DeleteUserUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserUserIdPathParams;
}


export class DeleteUserUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;
}
