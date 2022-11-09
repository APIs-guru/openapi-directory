import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchLogsLogGroup
/** 
 * <p/>
**/
export class CloudWatchLogsLogGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupArn" })
  logGroupArn?: string;
}
