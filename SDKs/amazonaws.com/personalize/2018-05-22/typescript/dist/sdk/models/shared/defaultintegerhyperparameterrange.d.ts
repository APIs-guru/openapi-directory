import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
export declare class DefaultIntegerHyperParameterRange extends SpeakeasyBase {
    isTunable?: boolean;
    maxValue?: number;
    minValue?: number;
    name?: string;
}
