import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteServerFollowingHostOrHandlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hostOrHandle" })
  hostOrHandle: string;
}


export class DeleteServerFollowingHostOrHandleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerFollowingHostOrHandleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteServerFollowingHostOrHandlePathParams;

  @Metadata()
  security: DeleteServerFollowingHostOrHandleSecurity;
}


export class DeleteServerFollowingHostOrHandleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
