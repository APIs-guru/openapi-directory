import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetProfileTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetProfileTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProfileTokenQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProfileTokenRequest;

  @Metadata()
  security: GetProfileTokenSecurity;
}


export class GetProfileTokenResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
