import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelStepMetadata
/** 
 * Metadata for Model steps.
**/
export class ModelStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
