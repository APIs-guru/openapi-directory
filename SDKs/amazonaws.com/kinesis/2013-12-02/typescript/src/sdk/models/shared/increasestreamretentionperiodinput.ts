import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncreaseStreamRetentionPeriodInput
/** 
 * Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
**/
export class IncreaseStreamRetentionPeriodInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
