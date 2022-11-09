import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLoggingOptionUpdate
/** 
 * Describes the Amazon CloudWatch logging option updates.
**/
export class CloudWatchLoggingOptionUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLoggingOptionId" })
  cloudWatchLoggingOptionId: string;

  @Metadata({ data: "json, name=LogStreamARNUpdate" })
  logStreamArnUpdate?: string;
}
