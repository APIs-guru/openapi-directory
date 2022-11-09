import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRateLimitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_context" })
  apiContext?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_name" })
  apiName?: string;
}


export class GetRateLimitsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetRateLimitsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRateLimitsQueryParams;

  @Metadata()
  security: GetRateLimitsSecurity;
}


export class GetRateLimits500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: shared.Error[];
}


export class GetRateLimitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rateLimitsResponse?: shared.RateLimitsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRateLimits500ApplicationJsonObject?: GetRateLimits500ApplicationJson;
}
