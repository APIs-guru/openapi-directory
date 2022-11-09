import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @Metadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @Metadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @Metadata({ data: "json, name=auto_init" })
  autoInit?: boolean;

  @Metadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=gitignore_template" })
  gitignoreTemplate?: string;

  @Metadata({ data: "json, name=has_downloads" })
  hasDownloads?: boolean;

  @Metadata({ data: "json, name=has_issues" })
  hasIssues?: boolean;

  @Metadata({ data: "json, name=has_projects" })
  hasProjects?: boolean;

  @Metadata({ data: "json, name=has_wiki" })
  hasWiki?: boolean;

  @Metadata({ data: "json, name=homepage" })
  homepage?: string;

  @Metadata({ data: "json, name=is_template" })
  isTemplate?: boolean;

  @Metadata({ data: "json, name=license_template" })
  licenseTemplate?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=team_id" })
  teamId?: number;
}


export class ReposCreateForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateForAuthenticatedUserRequestBody;
}


export class ReposCreateForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  repository?: shared.Repository;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  validationError?: shared.ValidationError;
}
