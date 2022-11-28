import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkflowUsageBillableMacos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_ms" })
  totalMs?: number;
}


export class WorkflowUsageBillableUbuntu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_ms" })
  totalMs?: number;
}


export class WorkflowUsageBillableWindows extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_ms" })
  totalMs?: number;
}


export class WorkflowUsageBillable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MACOS" })
  macos?: WorkflowUsageBillableMacos;

  @SpeakeasyMetadata({ data: "json, name=UBUNTU" })
  ubuntu?: WorkflowUsageBillableUbuntu;

  @SpeakeasyMetadata({ data: "json, name=WINDOWS" })
  windows?: WorkflowUsageBillableWindows;
}


// WorkflowUsage
/** 
 * Workflow Usage
**/
export class WorkflowUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billable" })
  billable: WorkflowUsageBillable;
}
