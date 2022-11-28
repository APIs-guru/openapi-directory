import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceSummary } from "./notebookinstancesummary";
export declare class ListNotebookInstancesOutput extends SpeakeasyBase {
    nextToken?: string;
    notebookInstances?: NotebookInstanceSummary[];
}
