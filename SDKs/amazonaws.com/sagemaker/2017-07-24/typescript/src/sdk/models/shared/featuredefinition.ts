import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeatureTypeEnum } from "./featuretypeenum";


// FeatureDefinition
/** 
 * A list of features. You must include <code>FeatureName</code> and <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and <code>String</code>. 
**/
export class FeatureDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @Metadata({ data: "json, name=FeatureType" })
  featureType?: FeatureTypeEnum;
}
