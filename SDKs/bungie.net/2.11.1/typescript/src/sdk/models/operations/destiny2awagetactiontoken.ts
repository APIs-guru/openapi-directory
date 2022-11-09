import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Destiny2AwaGetActionTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=correlationId" })
  correlationId: string;
}


export class Destiny2AwaGetActionTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2AwaGetActionTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2AwaGetActionTokenPathParams;

  @Metadata()
  security: Destiny2AwaGetActionTokenSecurity;
}


export class Destiny2AwaGetActionTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
