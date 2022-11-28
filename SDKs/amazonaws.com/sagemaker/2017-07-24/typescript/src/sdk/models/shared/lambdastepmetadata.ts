import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputParameter } from "./outputparameter";



// LambdaStepMetadata
/** 
 * Metadata for a Lambda step.
**/
export class LambdaStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputParameters", elemType: OutputParameter })
  outputParameters?: OutputParameter[];
}
