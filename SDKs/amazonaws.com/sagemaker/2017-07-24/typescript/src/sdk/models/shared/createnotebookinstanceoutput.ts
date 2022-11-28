import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNotebookInstanceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceArn" })
  notebookInstanceArn?: string;
}
