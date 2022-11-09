import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Repository } from "./repository";


export class InstallationTokenPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=issues" })
  issues?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=single_file" })
  singleFile?: string;
}

export enum InstallationTokenRepositorySelectionEnum {
    All = "all"
,    Selected = "selected"
}


// InstallationToken
/** 
 * Authentication token for a GitHub App installed on a user or org.
**/
export class InstallationToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires_at" })
  expiresAt: string;

  @Metadata({ data: "json, name=has_multiple_single_files" })
  hasMultipleSingleFiles?: boolean;

  @Metadata({ data: "json, name=permissions" })
  permissions?: InstallationTokenPermissions;

  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories?: Repository[];

  @Metadata({ data: "json, name=repository_selection" })
  repositorySelection?: InstallationTokenRepositorySelectionEnum;

  @Metadata({ data: "json, name=single_file" })
  singleFile?: string;

  @Metadata({ data: "json, name=single_file_paths" })
  singleFilePaths?: string[];

  @Metadata({ data: "json, name=token" })
  token: string;
}
