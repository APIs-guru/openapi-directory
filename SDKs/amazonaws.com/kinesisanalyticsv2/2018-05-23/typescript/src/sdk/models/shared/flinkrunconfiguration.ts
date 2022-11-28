import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FlinkRunConfiguration
/** 
 * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
**/
export class FlinkRunConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowNonRestoredState" })
  allowNonRestoredState?: boolean;
}
