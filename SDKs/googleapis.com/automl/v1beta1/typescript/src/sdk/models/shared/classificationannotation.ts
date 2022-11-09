import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassificationAnnotation
/** 
 * Contains annotation details specific to classification.
**/
export class ClassificationAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=score" })
  score?: number;
}
