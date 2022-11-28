import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Destiny2AwaGetActionTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=correlationId" })
  correlationId: string;
}


export class Destiny2AwaGetActionTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2AwaGetActionTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2AwaGetActionTokenPathParams;

  @SpeakeasyMetadata()
  security: Destiny2AwaGetActionTokenSecurity;
}


export class Destiny2AwaGetActionTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
