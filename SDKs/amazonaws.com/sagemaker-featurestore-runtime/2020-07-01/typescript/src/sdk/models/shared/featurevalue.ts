import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FeatureValue
/** 
 * The value associated with a feature.
**/
export class FeatureValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureName" })
  featureName: string;

  @SpeakeasyMetadata({ data: "json, name=ValueAsString" })
  valueAsString: string;
}
