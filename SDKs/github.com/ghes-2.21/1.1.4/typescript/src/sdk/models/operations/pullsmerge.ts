import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsMergePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsMergeRequestBodyMergeMethodEnum {
    Merge = "merge"
,    Squash = "squash"
,    Rebase = "rebase"
}


export class PullsMergeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit_message" })
  commitMessage?: string;

  @Metadata({ data: "json, name=commit_title" })
  commitTitle?: string;

  @Metadata({ data: "json, name=merge_method" })
  mergeMethod?: PullsMergeRequestBodyMergeMethodEnum;

  @Metadata({ data: "json, name=sha" })
  sha?: string;
}


export class PullsMergeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsMergePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsMergeRequestBody;
}


export class PullsMerge405ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PullsMerge409ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PullsMergeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullRequestMergeResult?: shared.PullRequestMergeResult;

  @Metadata()
  pullsMerge405ApplicationJsonObject?: PullsMerge405ApplicationJson;

  @Metadata()
  pullsMerge409ApplicationJsonObject?: PullsMerge409ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
