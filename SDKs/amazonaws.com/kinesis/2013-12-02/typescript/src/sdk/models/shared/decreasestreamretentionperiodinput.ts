import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DecreaseStreamRetentionPeriodInput
/** 
 * Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
**/
export class DecreaseStreamRetentionPeriodInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
