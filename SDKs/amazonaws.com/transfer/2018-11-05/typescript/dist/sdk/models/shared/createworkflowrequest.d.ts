import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStep } from "./workflowstep";
import { Tag } from "./tag";
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    description?: string;
    onExceptionSteps?: WorkflowStep[];
    steps: WorkflowStep[];
    tags?: Tag[];
}
