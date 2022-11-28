import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterModelStepMetadata
/** 
 * Metadata for a register model job step.
**/
export class RegisterModelStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
