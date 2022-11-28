import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecreaseStreamRetentionPeriodInput
/** 
 * Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
**/
export class DecreaseStreamRetentionPeriodInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RetentionPeriodHours" })
  retentionPeriodHours: number;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
