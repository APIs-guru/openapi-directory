import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GitConfig } from "./gitconfig";
import { Tag } from "./tag";


export class CreateCodeRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;

  @Metadata({ data: "json, name=GitConfig" })
  gitConfig: GitConfig;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
