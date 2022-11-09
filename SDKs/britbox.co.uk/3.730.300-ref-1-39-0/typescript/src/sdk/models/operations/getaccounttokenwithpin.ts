import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountTokenWithPinQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetAccountTokenWithPinSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetAccountTokenWithPinRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountTokenWithPinQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvPinAuthRequest;

  @Metadata()
  security: GetAccountTokenWithPinSecurity;
}


export class GetAccountTokenWithPinResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
