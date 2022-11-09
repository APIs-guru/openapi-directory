import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsUpdateBranchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsUpdateBranchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=expected_head_sha" })
  expectedHeadSha?: string;
}


export class PullsUpdateBranchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsUpdateBranchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsUpdateBranchRequestBody;
}


export class PullsUpdateBranch202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PullsUpdateBranch415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PullsUpdateBranchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullsUpdateBranch202ApplicationJsonObject?: PullsUpdateBranch202ApplicationJson;

  @Metadata()
  pullsUpdateBranch415ApplicationJsonObject?: PullsUpdateBranch415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
