import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetAccountTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountTokenQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AccountTokenRequest;
}


export class GetAccountTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
