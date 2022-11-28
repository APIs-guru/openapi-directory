import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RefreshTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class RefreshTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RefreshTokenQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TokenRefreshRequest;
}


export class RefreshTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessToken?: shared.AccessToken;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
