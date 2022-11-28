import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelStepMetadata
/** 
 * Metadata for Model steps.
**/
export class ModelStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
