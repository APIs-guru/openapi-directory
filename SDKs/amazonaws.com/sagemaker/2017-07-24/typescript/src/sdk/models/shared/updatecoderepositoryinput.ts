import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitConfigForUpdate } from "./gitconfigforupdate";


export class UpdateCodeRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;

  @Metadata({ data: "json, name=GitConfig" })
  gitConfig?: GitConfigForUpdate;
}
