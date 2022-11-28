import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsApiGatewayV2RouteSettings
/** 
 * Contains route settings for a stage.
**/
export class AwsApiGatewayV2RouteSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;
}
