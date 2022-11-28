import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelCounters
/** 
 * Provides a breakdown of the number of objects labeled.
**/
export class LabelCounters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedNonRetryableError" })
  failedNonRetryableError?: number;

  @SpeakeasyMetadata({ data: "json, name=HumanLabeled" })
  humanLabeled?: number;

  @SpeakeasyMetadata({ data: "json, name=MachineLabeled" })
  machineLabeled?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalLabeled" })
  totalLabeled?: number;

  @SpeakeasyMetadata({ data: "json, name=Unlabeled" })
  unlabeled?: number;
}
