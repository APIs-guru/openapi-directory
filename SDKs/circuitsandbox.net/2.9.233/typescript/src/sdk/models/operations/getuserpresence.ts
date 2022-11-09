import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPresencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetUserPresenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetUserPresenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserPresencePathParams;

  @Metadata()
  security: GetUserPresenceSecurity;
}


export class GetUserPresenceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  presence?: any;

  @Metadata()
  statusCode: number;
}
