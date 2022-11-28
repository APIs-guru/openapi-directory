import { SpeakeasyBase } from "../../../internal/utils";
import { AppValidationStrategyEnum } from "./appvalidationstrategyenum";
import { SsmValidationParameters } from "./ssmvalidationparameters";
/**
 * Configuration for validating an application.
**/
export declare class AppValidationConfiguration extends SpeakeasyBase {
    appValidationStrategy?: AppValidationStrategyEnum;
    name?: string;
    ssmValidationParameters?: SsmValidationParameters;
    validationId?: string;
}
