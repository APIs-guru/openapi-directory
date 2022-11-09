import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RefreshTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class RefreshTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RefreshTokenQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TokenRefreshRequest;
}


export class RefreshTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessToken?: shared.AccessToken;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
