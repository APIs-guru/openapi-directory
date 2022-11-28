import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransformJobStepMetadata
/** 
 * Metadata for a transform job step.
**/
export class TransformJobStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
