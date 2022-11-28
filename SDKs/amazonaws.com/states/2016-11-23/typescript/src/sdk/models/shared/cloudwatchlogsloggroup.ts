import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLogsLogGroup
/** 
 * <p/>
**/
export class CloudWatchLogsLogGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupArn" })
  logGroupArn?: string;
}
