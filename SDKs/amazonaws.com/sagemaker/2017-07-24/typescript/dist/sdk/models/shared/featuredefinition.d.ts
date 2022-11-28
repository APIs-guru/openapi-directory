import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureTypeEnum } from "./featuretypeenum";
/**
 * A list of features. You must include <code>FeatureName</code> and <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and <code>String</code>.
**/
export declare class FeatureDefinition extends SpeakeasyBase {
    featureName?: string;
    featureType?: FeatureTypeEnum;
}
