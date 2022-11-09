import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateOrUpdateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateOrUpdateEnvironmentRequestBodyReviewers extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=type" })
  type?: shared.DeploymentReviewerTypeEnum;
}


export class ReposCreateOrUpdateEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployment_branch_policy" })
  deploymentBranchPolicy?: shared.DeploymentBranchPolicy;

  @Metadata({ data: "json, name=reviewers", elemType: operations.ReposCreateOrUpdateEnvironmentRequestBodyReviewers })
  reviewers?: ReposCreateOrUpdateEnvironmentRequestBodyReviewers[];

  @Metadata({ data: "json, name=wait_timer" })
  waitTimer?: number;
}


export class ReposCreateOrUpdateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateOrUpdateEnvironmentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateOrUpdateEnvironmentRequestBody;
}


export class ReposCreateOrUpdateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  environment?: shared.Environment;
}
