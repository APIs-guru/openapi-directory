import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoricalValue } from "./categoricalvalue";


// FeatureValue
/** 
 * Representative value of a single feature within the cluster.
**/
export class FeatureValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoricalValue" })
  categoricalValue?: CategoricalValue;

  @Metadata({ data: "json, name=featureColumn" })
  featureColumn?: string;

  @Metadata({ data: "json, name=numericalValue" })
  numericalValue?: number;
}
