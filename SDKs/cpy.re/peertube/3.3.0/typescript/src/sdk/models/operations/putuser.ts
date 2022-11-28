import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: PutUserSecurity;
}


export class PutUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
