import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetPullRequestReviewProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetPullRequestReviewProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetPullRequestReviewProtectionPathParams;
}


export class ReposGetPullRequestReviewProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protectedBranchPullRequestReview?: shared.ProtectedBranchPullRequestReview;
}
