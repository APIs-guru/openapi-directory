import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsApiGatewayMethodSettings
/** 
 * Defines settings for a method for the stage.
**/
export class AwsApiGatewayMethodSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=CacheDataEncrypted" })
  cacheDataEncrypted?: boolean;

  @Metadata({ data: "json, name=CacheTtlInSeconds" })
  cacheTtlInSeconds?: number;

  @Metadata({ data: "json, name=CachingEnabled" })
  cachingEnabled?: boolean;

  @Metadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @Metadata({ data: "json, name=HttpMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: string;

  @Metadata({ data: "json, name=MetricsEnabled" })
  metricsEnabled?: boolean;

  @Metadata({ data: "json, name=RequireAuthorizationForCacheControl" })
  requireAuthorizationForCacheControl?: boolean;

  @Metadata({ data: "json, name=ResourcePath" })
  resourcePath?: string;

  @Metadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @Metadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;

  @Metadata({ data: "json, name=UnauthorizedCacheControlHeaderStrategy" })
  unauthorizedCacheControlHeaderStrategy?: string;
}
