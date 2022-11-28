import { SpeakeasyBase } from "../../../internal/utils";
export declare class WorkflowUsageBillableMacos extends SpeakeasyBase {
    totalMs?: number;
}
export declare class WorkflowUsageBillableUbuntu extends SpeakeasyBase {
    totalMs?: number;
}
export declare class WorkflowUsageBillableWindows extends SpeakeasyBase {
    totalMs?: number;
}
export declare class WorkflowUsageBillable extends SpeakeasyBase {
    macos?: WorkflowUsageBillableMacos;
    ubuntu?: WorkflowUsageBillableUbuntu;
    windows?: WorkflowUsageBillableWindows;
}
/**
 * Workflow Usage
**/
export declare class WorkflowUsage extends SpeakeasyBase {
    billable: WorkflowUsageBillable;
}
