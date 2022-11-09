import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeNotebookInstanceLifecycleConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;
}
