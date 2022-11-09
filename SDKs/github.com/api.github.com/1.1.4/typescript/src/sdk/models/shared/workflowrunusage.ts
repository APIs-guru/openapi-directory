import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkflowRunUsageBillableMacos extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs" })
  jobs: number;

  @Metadata({ data: "json, name=total_ms" })
  totalMs: number;
}


export class WorkflowRunUsageBillableUbuntu extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs" })
  jobs: number;

  @Metadata({ data: "json, name=total_ms" })
  totalMs: number;
}


export class WorkflowRunUsageBillableWindows extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs" })
  jobs: number;

  @Metadata({ data: "json, name=total_ms" })
  totalMs: number;
}


export class WorkflowRunUsageBillable extends SpeakeasyBase {
  @Metadata({ data: "json, name=MACOS" })
  macos?: WorkflowRunUsageBillableMacos;

  @Metadata({ data: "json, name=UBUNTU" })
  ubuntu?: WorkflowRunUsageBillableUbuntu;

  @Metadata({ data: "json, name=WINDOWS" })
  windows?: WorkflowRunUsageBillableWindows;
}


// WorkflowRunUsage
/** 
 * Workflow Run Usage
**/
export class WorkflowRunUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=billable" })
  billable: WorkflowRunUsageBillable;

  @Metadata({ data: "json, name=run_duration_ms" })
  runDurationMs: number;
}
