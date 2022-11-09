import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Explanation
/** 
 * Explanation for a single feature.
**/
export class Explanation extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: number;

  @Metadata({ data: "json, name=featureName" })
  featureName?: string;
}
