import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransformJobStepMetadata
/** 
 * Metadata for a transform job step.
**/
export class TransformJobStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
