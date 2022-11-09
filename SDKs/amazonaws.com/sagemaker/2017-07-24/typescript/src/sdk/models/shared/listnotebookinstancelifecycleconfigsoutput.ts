import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotebookInstanceLifecycleConfigSummary } from "./notebookinstancelifecycleconfigsummary";


export class ListNotebookInstanceLifecycleConfigsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigs", elemType: shared.NotebookInstanceLifecycleConfigSummary })
  notebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}
