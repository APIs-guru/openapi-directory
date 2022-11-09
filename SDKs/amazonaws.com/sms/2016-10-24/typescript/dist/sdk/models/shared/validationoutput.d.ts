import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppValidationOutput } from "./appvalidationoutput";
import { ServerValidationOutput } from "./servervalidationoutput";
import { ValidationStatusEnum } from "./validationstatusenum";
/**
 * Contains validation output.
**/
export declare class ValidationOutput extends SpeakeasyBase {
    appValidationOutput?: AppValidationOutput;
    latestValidationTime?: Date;
    name?: string;
    serverValidationOutput?: ServerValidationOutput;
    status?: ValidationStatusEnum;
    statusMessage?: string;
    validationId?: string;
}
