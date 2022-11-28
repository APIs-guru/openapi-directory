import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserPresencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetUserPresenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetUserPresenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserPresencePathParams;

  @SpeakeasyMetadata()
  security: GetUserPresenceSecurity;
}


export class GetUserPresenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  presence?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
