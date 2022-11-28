import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountTokenWithPinQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetAccountTokenWithPinSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetAccountTokenWithPinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountTokenWithPinQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvPinAuthRequest;

  @SpeakeasyMetadata()
  security: GetAccountTokenWithPinSecurity;
}


export class GetAccountTokenWithPinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
