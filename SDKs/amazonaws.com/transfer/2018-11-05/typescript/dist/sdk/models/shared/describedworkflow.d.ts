import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStep } from "./workflowstep";
import { Tag } from "./tag";
/**
 * Describes the properties of the specified workflow
**/
export declare class DescribedWorkflow extends SpeakeasyBase {
    arn: string;
    description?: string;
    onExceptionSteps?: WorkflowStep[];
    steps?: WorkflowStep[];
    tags?: Tag[];
    workflowId?: string;
}
