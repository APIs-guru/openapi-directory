import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopNotebookInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;
}
