import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserRateLimitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_context" })
  apiContext?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_name" })
  apiName?: string;
}


export class GetUserRateLimitsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetUserRateLimitsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserRateLimitsQueryParams;

  @Metadata()
  security: GetUserRateLimitsSecurity;
}


export class GetUserRateLimits500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: shared.Error[];
}


export class GetUserRateLimitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rateLimitsResponse?: shared.RateLimitsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserRateLimits500ApplicationJsonObject?: GetUserRateLimits500ApplicationJson;
}
