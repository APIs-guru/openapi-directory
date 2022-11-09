import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePresignedNotebookInstanceUrlOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizedUrl" })
  authorizedUrl?: string;
}
