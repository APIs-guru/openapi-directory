import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCodeRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;
}
