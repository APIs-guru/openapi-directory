import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceSummary } from "./notebookinstancesummary";



export class ListNotebookInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstances", elemType: NotebookInstanceSummary })
  notebookInstances?: NotebookInstanceSummary[];
}
