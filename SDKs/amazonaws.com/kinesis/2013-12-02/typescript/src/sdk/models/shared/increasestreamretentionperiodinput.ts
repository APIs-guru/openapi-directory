import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncreaseStreamRetentionPeriodInput
/** 
 * Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
**/
export class IncreaseStreamRetentionPeriodInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
