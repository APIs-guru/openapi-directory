import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartNotebookInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;
}
