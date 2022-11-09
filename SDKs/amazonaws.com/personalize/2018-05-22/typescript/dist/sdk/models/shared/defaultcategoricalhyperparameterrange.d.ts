import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
export declare class DefaultCategoricalHyperParameterRange extends SpeakeasyBase {
    isTunable?: boolean;
    name?: string;
    values?: string[];
}
