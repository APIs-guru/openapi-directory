import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNotebookInstanceLifecycleConfigOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigArn" })
  notebookInstanceLifecycleConfigArn?: string;
}
