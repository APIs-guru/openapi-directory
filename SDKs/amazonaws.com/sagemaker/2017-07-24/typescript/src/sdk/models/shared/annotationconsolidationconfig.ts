import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnnotationConsolidationConfig
/** 
 * Configures how labels are consolidated across human workers and processes output data. 
**/
export class AnnotationConsolidationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnnotationConsolidationLambdaArn" })
  annotationConsolidationLambdaArn: string;
}
