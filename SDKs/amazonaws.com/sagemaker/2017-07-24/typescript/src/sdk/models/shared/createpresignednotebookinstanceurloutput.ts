import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePresignedNotebookInstanceUrlOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizedUrl" })
  authorizedUrl?: string;
}
