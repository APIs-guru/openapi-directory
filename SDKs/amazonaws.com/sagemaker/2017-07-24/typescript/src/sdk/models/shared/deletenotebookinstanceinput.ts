import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNotebookInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;
}
