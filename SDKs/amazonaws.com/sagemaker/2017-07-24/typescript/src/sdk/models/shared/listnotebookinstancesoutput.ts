import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotebookInstanceSummary } from "./notebookinstancesummary";


export class ListNotebookInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NotebookInstances", elemType: shared.NotebookInstanceSummary })
  notebookInstances?: NotebookInstanceSummary[];
}
