import { SpeakeasyBase } from "../../../internal/utils";
export declare class WorkflowRunUsageBillableMacos extends SpeakeasyBase {
    jobs: number;
    totalMs: number;
}
export declare class WorkflowRunUsageBillableUbuntu extends SpeakeasyBase {
    jobs: number;
    totalMs: number;
}
export declare class WorkflowRunUsageBillableWindows extends SpeakeasyBase {
    jobs: number;
    totalMs: number;
}
export declare class WorkflowRunUsageBillable extends SpeakeasyBase {
    macos?: WorkflowRunUsageBillableMacos;
    ubuntu?: WorkflowRunUsageBillableUbuntu;
    windows?: WorkflowRunUsageBillableWindows;
}
/**
 * Workflow Run Usage
**/
export declare class WorkflowRunUsage extends SpeakeasyBase {
    billable: WorkflowRunUsageBillable;
    runDurationMs: number;
}
