import { SpeakeasyBase } from "../../../internal/utils";
import { CategoricalValue } from "./categoricalvalue";
/**
 * Representative value of a single feature within the cluster.
**/
export declare class FeatureValue extends SpeakeasyBase {
    categoricalValue?: CategoricalValue;
    featureColumn?: string;
    numericalValue?: number;
}
