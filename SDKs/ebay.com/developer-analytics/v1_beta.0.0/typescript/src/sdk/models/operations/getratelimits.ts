import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRateLimitsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_context" })
  apiContext?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_name" })
  apiName?: string;
}


export class GetRateLimitsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetRateLimits500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: shared.Error[];
}


export class GetRateLimitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRateLimitsQueryParams;

  @SpeakeasyMetadata()
  security: GetRateLimitsSecurity;
}


export class GetRateLimitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rateLimitsResponse?: shared.RateLimitsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRateLimits500ApplicationJsonObject?: GetRateLimits500ApplicationJson;
}
