import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Explanation
/** 
 * Explanation for a single feature.
**/
export class Explanation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: number;

  @SpeakeasyMetadata({ data: "json, name=featureName" })
  featureName?: string;
}
