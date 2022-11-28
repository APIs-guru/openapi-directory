import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposUpdateRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Visibility = "visibility",
    Internal = "internal"
}


export class ReposUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_merge_commit" })
  allowMergeCommit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_squash_merge" })
  allowSquashMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=default_branch" })
  defaultBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

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

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: ReposUpdateRequestBodyVisibilityEnum;
}


export class ReposUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateRequestBody;
}


export class ReposUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  fullRepository?: shared.FullRepository;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
