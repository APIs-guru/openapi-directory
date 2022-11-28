import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNotebookInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;
}
