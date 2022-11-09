import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePresignedNotebookInstanceUrlInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @Metadata({ data: "json, name=SessionExpirationDurationInSeconds" })
  sessionExpirationDurationInSeconds?: number;
}
