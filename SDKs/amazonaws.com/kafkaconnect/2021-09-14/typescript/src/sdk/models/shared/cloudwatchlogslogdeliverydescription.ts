import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLogsLogDeliveryDescription
/** 
 * A description of the log delivery settings.
**/
export class CloudWatchLogsLogDeliveryDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=logGroup" })
  logGroup?: string;
}
