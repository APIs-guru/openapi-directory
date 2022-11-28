import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitConfigForUpdate } from "./gitconfigforupdate";



export class UpdateCodeRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=GitConfig" })
  gitConfig?: GitConfigForUpdate;
}
