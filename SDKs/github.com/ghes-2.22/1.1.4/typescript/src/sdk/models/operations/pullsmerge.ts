import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsMergePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum PullsMergeRequestBodyMergeMethodEnum {
    Merge = "merge",
    Squash = "squash",
    Rebase = "rebase"
}


export class PullsMergeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit_message" })
  commitMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_title" })
  commitTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=merge_method" })
  mergeMethod?: PullsMergeRequestBodyMergeMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;
}


export class PullsMerge405ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PullsMerge409ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PullsMergeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsMergePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsMergeRequestBody;
}


export class PullsMergeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequestMergeResult?: shared.PullRequestMergeResult;

  @SpeakeasyMetadata()
  pullsMerge405ApplicationJsonObject?: PullsMerge405ApplicationJson;

  @SpeakeasyMetadata()
  pullsMerge409ApplicationJsonObject?: PullsMerge409ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
