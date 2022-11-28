import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceLifecycleConfigSummary } from "./notebookinstancelifecycleconfigsummary";



export class ListNotebookInstanceLifecycleConfigsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigs", elemType: NotebookInstanceLifecycleConfigSummary })
  notebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}
