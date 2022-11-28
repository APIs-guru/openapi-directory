import { SpeakeasyBase } from "../../../internal/utils";
import { ListedWorkflow } from "./listedworkflow";
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    nextToken?: string;
    workflows: ListedWorkflow[];
}
