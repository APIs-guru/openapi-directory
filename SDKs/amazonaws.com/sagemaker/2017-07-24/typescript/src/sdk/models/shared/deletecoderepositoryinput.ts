import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCodeRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;
}
