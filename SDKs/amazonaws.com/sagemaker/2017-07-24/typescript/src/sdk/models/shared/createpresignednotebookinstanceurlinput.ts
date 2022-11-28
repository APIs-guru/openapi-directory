import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePresignedNotebookInstanceUrlInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceName" })
  notebookInstanceName: string;

  @SpeakeasyMetadata({ data: "json, name=SessionExpirationDurationInSeconds" })
  sessionExpirationDurationInSeconds?: number;
}
