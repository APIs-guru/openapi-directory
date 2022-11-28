import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLogsLogDeliveryDescription
/** 
 * A description of the log delivery settings.
**/
export class CloudWatchLogsLogDeliveryDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logGroup" })
  logGroup?: string;
}
