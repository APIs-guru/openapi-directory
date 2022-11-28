import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassificationAnnotation
/** 
 * Contains annotation details specific to classification.
**/
export class ClassificationAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
