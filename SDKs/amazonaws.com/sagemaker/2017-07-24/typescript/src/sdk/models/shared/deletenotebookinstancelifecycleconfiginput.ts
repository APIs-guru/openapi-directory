import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNotebookInstanceLifecycleConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;
}
