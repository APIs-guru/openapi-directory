import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
export declare class TerminateWorkflowExecutionInput extends SpeakeasyBase {
    childPolicy?: ChildPolicyEnum;
    details?: string;
    domain: string;
    reason?: string;
    runId?: string;
    workflowId: string;
}
