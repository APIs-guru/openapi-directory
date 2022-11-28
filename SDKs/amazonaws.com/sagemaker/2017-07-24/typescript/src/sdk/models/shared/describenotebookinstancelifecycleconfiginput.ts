import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNotebookInstanceLifecycleConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;
}
