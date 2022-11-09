import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListBranchesForHeadCommitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" })
  commitSha: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListBranchesForHeadCommitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListBranchesForHeadCommitPathParams;
}


export class ReposListBranchesForHeadCommit415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposListBranchesForHeadCommitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.BranchShort })
  branchShorts?: shared.BranchShort[];

  @Metadata()
  reposListBranchesForHeadCommit415ApplicationJsonObject?: ReposListBranchesForHeadCommit415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
