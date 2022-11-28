import { SpeakeasyBase } from "../../../internal/utils";
import { ListedExecution } from "./listedexecution";
export declare class ListExecutionsResponse extends SpeakeasyBase {
    executions: ListedExecution[];
    nextToken?: string;
    workflowId: string;
}
