import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_init" })
  autoInit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gitignore_template" })
  gitignoreTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=has_downloads" })
  hasDownloads?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_issues" })
  hasIssues?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_projects" })
  hasProjects?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_wiki" })
  hasWiki?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homepage" })
  homepage?: string;

  @SpeakeasyMetadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=license_template" })
  licenseTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId?: number;
}


export class ReposCreateForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateForAuthenticatedUserRequestBody;
}


export class ReposCreateForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  repository?: shared.Repository;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
