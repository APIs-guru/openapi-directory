import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLogsLogDelivery
/** 
 * The settings for delivering connector logs to Amazon CloudWatch Logs.
**/
export class CloudWatchLogsLogDelivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=logGroup" })
  logGroup?: string;
}
