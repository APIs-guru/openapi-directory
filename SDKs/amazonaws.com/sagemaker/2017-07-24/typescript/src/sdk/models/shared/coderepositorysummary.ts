import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitConfig } from "./gitconfig";


// CodeRepositorySummary
/** 
 * Specifies summary information about a Git repository.
**/
export class CodeRepositorySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositoryArn" })
  codeRepositoryArn: string;

  @Metadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=GitConfig" })
  gitConfig?: GitConfig;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;
}
