import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterModelStepMetadata
/** 
 * Metadata for a register model job step.
**/
export class RegisterModelStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
