import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkflowUsageBillableMacos extends SpeakeasyBase {
  @Metadata({ data: "json, name=total_ms" })
  totalMs?: number;
}


export class WorkflowUsageBillableUbuntu extends SpeakeasyBase {
  @Metadata({ data: "json, name=total_ms" })
  totalMs?: number;
}


export class WorkflowUsageBillableWindows extends SpeakeasyBase {
  @Metadata({ data: "json, name=total_ms" })
  totalMs?: number;
}


export class WorkflowUsageBillable extends SpeakeasyBase {
  @Metadata({ data: "json, name=MACOS" })
  macos?: WorkflowUsageBillableMacos;

  @Metadata({ data: "json, name=UBUNTU" })
  ubuntu?: WorkflowUsageBillableUbuntu;

  @Metadata({ data: "json, name=WINDOWS" })
  windows?: WorkflowUsageBillableWindows;
}


// WorkflowUsage
/** 
 * Workflow Usage
**/
export class WorkflowUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=billable" })
  billable: WorkflowUsageBillable;
}
