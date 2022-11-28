import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";



export class InstallationTokenPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=single_file" })
  singleFile?: string;
}

export enum InstallationTokenRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}


// InstallationToken
/** 
 * Authentication token for a GitHub App installed on a user or org.
**/
export class InstallationToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt: string;

  @SpeakeasyMetadata({ data: "json, name=has_multiple_single_files" })
  hasMultipleSingleFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: InstallationTokenPermissions;

  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: Repository })
  repositories?: Repository[];

  @SpeakeasyMetadata({ data: "json, name=repository_selection" })
  repositorySelection?: InstallationTokenRepositorySelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=single_file" })
  singleFile?: string;

  @SpeakeasyMetadata({ data: "json, name=single_file_paths" })
  singleFilePaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
