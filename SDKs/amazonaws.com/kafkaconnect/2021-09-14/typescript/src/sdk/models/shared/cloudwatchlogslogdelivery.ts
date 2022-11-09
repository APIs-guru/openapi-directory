import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLogsLogDelivery
/** 
 * The settings for delivering connector logs to Amazon CloudWatch Logs.
**/
export class CloudWatchLogsLogDelivery extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=logGroup" })
  logGroup?: string;
}
