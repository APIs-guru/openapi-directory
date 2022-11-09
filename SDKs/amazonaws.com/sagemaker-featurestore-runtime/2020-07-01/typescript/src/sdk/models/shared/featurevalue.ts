import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FeatureValue
/** 
 * The value associated with a feature.
**/
export class FeatureValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureName" })
  featureName: string;

  @Metadata({ data: "json, name=ValueAsString" })
  valueAsString: string;
}
