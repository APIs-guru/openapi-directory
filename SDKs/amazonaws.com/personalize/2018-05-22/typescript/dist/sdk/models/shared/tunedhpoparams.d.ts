import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
**/
export declare class TunedHpoParams extends SpeakeasyBase {
    algorithmHyperParameters?: Map<string, string>;
}
