import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ValidationStatusEnum } from "./validationstatusenum";
/**
 * Contains the status of validating an application.
**/
export declare class NotificationContext extends SpeakeasyBase {
    status?: ValidationStatusEnum;
    statusMessage?: string;
    validationId?: string;
}
