import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListedWorkflow } from "./listedworkflow";



export class ListWorkflowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Workflows", elemType: ListedWorkflow })
  workflows: ListedWorkflow[];
}
