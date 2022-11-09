import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FlinkRunConfiguration
/** 
 * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
**/
export class FlinkRunConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowNonRestoredState" })
  allowNonRestoredState?: boolean;
}
