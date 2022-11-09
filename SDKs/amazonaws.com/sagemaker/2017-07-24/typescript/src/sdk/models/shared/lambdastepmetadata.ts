import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutputParameter } from "./outputparameter";


// LambdaStepMetadata
/** 
 * Metadata for a Lambda step.
**/
export class LambdaStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=OutputParameters", elemType: shared.OutputParameter })
  outputParameters?: OutputParameter[];
}
