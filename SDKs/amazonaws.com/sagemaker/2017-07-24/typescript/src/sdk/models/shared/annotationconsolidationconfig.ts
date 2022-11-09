import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnnotationConsolidationConfig
/** 
 * Configures how labels are consolidated across human workers and processes output data. 
**/
export class AnnotationConsolidationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnnotationConsolidationLambdaArn" })
  annotationConsolidationLambdaArn: string;
}
