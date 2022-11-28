import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLoggingOptionUpdate
/** 
 * Describes the Amazon CloudWatch logging option updates.
**/
export class CloudWatchLoggingOptionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionId" })
  cloudWatchLoggingOptionId: string;

  @SpeakeasyMetadata({ data: "json, name=LogStreamARNUpdate" })
  logStreamArnUpdate?: string;
}
