import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitConfig } from "./gitconfig";
import { Tag } from "./tag";



export class CreateCodeRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=GitConfig" })
  gitConfig: GitConfig;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
