import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserRequestsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUserRequestsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserRequestsIdPathParams;
}


export class GetUserRequestsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userRequestEntity?: shared.UserRequestEntity;
}
