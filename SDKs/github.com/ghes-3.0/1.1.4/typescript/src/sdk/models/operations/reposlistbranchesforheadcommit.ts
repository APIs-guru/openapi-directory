import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListBranchesForHeadCommitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" })
  commitSha: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListBranchesForHeadCommit415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReposListBranchesForHeadCommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListBranchesForHeadCommitPathParams;
}


export class ReposListBranchesForHeadCommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.BranchShort })
  branchShorts?: shared.BranchShort[];

  @SpeakeasyMetadata()
  reposListBranchesForHeadCommit415ApplicationJsonObject?: ReposListBranchesForHeadCommit415ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
