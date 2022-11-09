import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelCounters
/** 
 * Provides a breakdown of the number of objects labeled.
**/
export class LabelCounters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedNonRetryableError" })
  failedNonRetryableError?: number;

  @Metadata({ data: "json, name=HumanLabeled" })
  humanLabeled?: number;

  @Metadata({ data: "json, name=MachineLabeled" })
  machineLabeled?: number;

  @Metadata({ data: "json, name=TotalLabeled" })
  totalLabeled?: number;

  @Metadata({ data: "json, name=Unlabeled" })
  unlabeled?: number;
}
