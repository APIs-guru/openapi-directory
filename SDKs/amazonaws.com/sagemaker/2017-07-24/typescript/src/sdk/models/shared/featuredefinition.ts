import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureTypeEnum } from "./featuretypeenum";



// FeatureDefinition
/** 
 * A list of features. You must include <code>FeatureName</code> and <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and <code>String</code>. 
**/
export class FeatureDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureType" })
  featureType?: FeatureTypeEnum;
}
