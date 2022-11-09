import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNotebookInstanceLifecycleConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;
}
