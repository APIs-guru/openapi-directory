import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsUpdateBranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsUpdateBranchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expected_head_sha" })
  expectedHeadSha?: string;
}


export class PullsUpdateBranch202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class PullsUpdateBranch415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PullsUpdateBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsUpdateBranchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsUpdateBranchRequestBody;
}


export class PullsUpdateBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullsUpdateBranch202ApplicationJsonObject?: PullsUpdateBranch202ApplicationJson;

  @SpeakeasyMetadata()
  pullsUpdateBranch415ApplicationJsonObject?: PullsUpdateBranch415ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
