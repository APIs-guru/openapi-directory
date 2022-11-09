import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
export declare class DefaultContinuousHyperParameterRange extends SpeakeasyBase {
    isTunable?: boolean;
    maxValue?: number;
    minValue?: number;
    name?: string;
}
