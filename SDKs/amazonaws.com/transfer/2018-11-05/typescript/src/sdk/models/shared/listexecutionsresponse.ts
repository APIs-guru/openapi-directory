import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListedExecution } from "./listedexecution";


export class ListExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Executions", elemType: shared.ListedExecution })
  executions: ListedExecution[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
