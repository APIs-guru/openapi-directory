import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNotebookInstanceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceArn" })
  notebookInstanceArn?: string;
}
