import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartNotebookInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;
}
