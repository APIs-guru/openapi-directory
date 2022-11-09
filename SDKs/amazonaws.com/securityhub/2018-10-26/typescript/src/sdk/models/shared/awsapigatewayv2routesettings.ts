import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsApiGatewayV2RouteSettings
/** 
 * Contains route settings for a stage.
**/
export class AwsApiGatewayV2RouteSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @Metadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: boolean;

  @Metadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: string;

  @Metadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @Metadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;
}
