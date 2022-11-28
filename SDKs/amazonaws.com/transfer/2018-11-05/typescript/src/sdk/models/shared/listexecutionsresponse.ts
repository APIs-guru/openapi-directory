import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListedExecution } from "./listedexecution";



export class ListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Executions", elemType: ListedExecution })
  executions: ListedExecution[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
