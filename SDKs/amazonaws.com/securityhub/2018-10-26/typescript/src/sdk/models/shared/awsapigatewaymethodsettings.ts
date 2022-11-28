import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsApiGatewayMethodSettings
/** 
 * Defines settings for a method for the stage.
**/
export class AwsApiGatewayMethodSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CacheDataEncrypted" })
  cacheDataEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CacheTtlInSeconds" })
  cacheTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=CachingEnabled" })
  cachingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HttpMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricsEnabled" })
  metricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequireAuthorizationForCacheControl" })
  requireAuthorizationForCacheControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResourcePath" })
  resourcePath?: string;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=UnauthorizedCacheControlHeaderStrategy" })
  unauthorizedCacheControlHeaderStrategy?: string;
}
