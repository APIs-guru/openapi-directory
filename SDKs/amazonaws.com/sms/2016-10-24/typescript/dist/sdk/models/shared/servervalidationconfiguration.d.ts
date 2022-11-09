import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";
import { ServerValidationStrategyEnum } from "./servervalidationstrategyenum";
import { UserDataValidationParameters } from "./userdatavalidationparameters";
/**
 * Configuration for validating an instance.
**/
export declare class ServerValidationConfiguration extends SpeakeasyBase {
    name?: string;
    server?: Server;
    serverValidationStrategy?: ServerValidationStrategyEnum;
    userDataValidationParameters?: UserDataValidationParameters;
    validationId?: string;
}
