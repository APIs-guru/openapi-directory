import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserRateLimitsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_context" })
  apiContext?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_name" })
  apiName?: string;
}


export class GetUserRateLimitsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetUserRateLimits500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: shared.Error[];
}


export class GetUserRateLimitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserRateLimitsQueryParams;

  @SpeakeasyMetadata()
  security: GetUserRateLimitsSecurity;
}


export class GetUserRateLimitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rateLimitsResponse?: shared.RateLimitsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserRateLimits500ApplicationJsonObject?: GetUserRateLimits500ApplicationJson;
}
