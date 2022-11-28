import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
import { WorkflowType } from "./workflowtype";
/**
 * Contains information about a workflow type.
**/
export declare class WorkflowTypeInfo extends SpeakeasyBase {
    creationDate: Date;
    deprecationDate?: Date;
    description?: string;
    status: RegistrationStatusEnum;
    workflowType: WorkflowType;
}
