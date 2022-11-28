import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutUsersPasswordResetTokenJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class PutUsersPasswordResetTokenJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersPasswordResetTokenJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutUsersPasswordResetTokenJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
