import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkflowRunUsageBillableMacos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs" })
  jobs: number;

  @SpeakeasyMetadata({ data: "json, name=total_ms" })
  totalMs: number;
}


export class WorkflowRunUsageBillableUbuntu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs" })
  jobs: number;

  @SpeakeasyMetadata({ data: "json, name=total_ms" })
  totalMs: number;
}


export class WorkflowRunUsageBillableWindows extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs" })
  jobs: number;

  @SpeakeasyMetadata({ data: "json, name=total_ms" })
  totalMs: number;
}


export class WorkflowRunUsageBillable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MACOS" })
  macos?: WorkflowRunUsageBillableMacos;

  @SpeakeasyMetadata({ data: "json, name=UBUNTU" })
  ubuntu?: WorkflowRunUsageBillableUbuntu;

  @SpeakeasyMetadata({ data: "json, name=WINDOWS" })
  windows?: WorkflowRunUsageBillableWindows;
}


// WorkflowRunUsage
/** 
 * Workflow Run Usage
**/
export class WorkflowRunUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billable" })
  billable: WorkflowRunUsageBillable;

  @SpeakeasyMetadata({ data: "json, name=run_duration_ms" })
  runDurationMs: number;
}
