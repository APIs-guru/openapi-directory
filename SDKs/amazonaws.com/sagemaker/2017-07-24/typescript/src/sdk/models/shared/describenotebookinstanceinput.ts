import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNotebookInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;
}
