import { SpeakeasyBase } from "../../../internal/utils";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";
/**
 * Lists the properties of an <i>action</i>. An action represents an action or activity. Some examples are a workflow step and a model deployment. Generally, an action involves at least one input artifact or output artifact.
**/
export declare class ActionSummary extends SpeakeasyBase {
    actionArn?: string;
    actionName?: string;
    actionType?: string;
    creationTime?: Date;
    lastModifiedTime?: Date;
    source?: ActionSource;
    status?: ActionStatusEnum;
}
