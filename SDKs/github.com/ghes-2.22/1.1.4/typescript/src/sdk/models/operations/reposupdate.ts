import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposUpdateRequestBodyVisibilityEnum {
    Public = "public"
,    Private = "private"
,    Visibility = "visibility"
,    Internal = "internal"
}


export class ReposUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @Metadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @Metadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=default_branch" })
  defaultBranch?: string;

  @Metadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

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

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=visibility" })
  visibility?: ReposUpdateRequestBodyVisibilityEnum;
}


export class ReposUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateRequestBody;
}


export class ReposUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  fullRepository?: shared.FullRepository;

  @Metadata()
  validationError?: shared.ValidationError;
}
