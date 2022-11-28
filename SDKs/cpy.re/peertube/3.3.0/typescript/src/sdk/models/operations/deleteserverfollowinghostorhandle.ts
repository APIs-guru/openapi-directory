import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteServerFollowingHostOrHandlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hostOrHandle" })
  hostOrHandle: string;
}


export class DeleteServerFollowingHostOrHandleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerFollowingHostOrHandleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteServerFollowingHostOrHandlePathParams;

  @SpeakeasyMetadata()
  security: DeleteServerFollowingHostOrHandleSecurity;
}


export class DeleteServerFollowingHostOrHandleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
