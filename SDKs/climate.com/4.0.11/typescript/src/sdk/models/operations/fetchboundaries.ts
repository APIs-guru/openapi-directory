import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FetchBoundariesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class FetchBoundariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BoundariesQuery;

  @SpeakeasyMetadata()
  security: FetchBoundariesSecurity;
}


export class FetchBoundariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boundaries?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
