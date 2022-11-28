import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitConfig } from "./gitconfig";



// CodeRepositorySummary
/** 
 * Specifies summary information about a Git repository.
**/
export class CodeRepositorySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryArn" })
  codeRepositoryArn: string;

  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=GitConfig" })
  gitConfig?: GitConfig;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;
}
