import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoricalValue } from "./categoricalvalue";



// FeatureValue
/** 
 * Representative value of a single feature within the cluster.
**/
export class FeatureValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoricalValue" })
  categoricalValue?: CategoricalValue;

  @SpeakeasyMetadata({ data: "json, name=featureColumn" })
  featureColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=numericalValue" })
  numericalValue?: number;
}
