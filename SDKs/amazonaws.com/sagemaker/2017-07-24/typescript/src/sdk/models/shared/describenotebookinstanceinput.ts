import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeNotebookInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;
}
