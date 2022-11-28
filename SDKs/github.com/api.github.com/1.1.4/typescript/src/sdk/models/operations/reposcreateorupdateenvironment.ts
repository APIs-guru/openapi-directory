import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateOrUpdateEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateOrUpdateEnvironmentRequestBodyReviewers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.DeploymentReviewerTypeEnum;
}


export class ReposCreateOrUpdateEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployment_branch_policy" })
  deploymentBranchPolicy?: shared.DeploymentBranchPolicy;

  @SpeakeasyMetadata({ data: "json, name=reviewers", elemType: ReposCreateOrUpdateEnvironmentRequestBodyReviewers })
  reviewers?: ReposCreateOrUpdateEnvironmentRequestBodyReviewers[];

  @SpeakeasyMetadata({ data: "json, name=wait_timer" })
  waitTimer?: number;
}


export class ReposCreateOrUpdateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateOrUpdateEnvironmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateOrUpdateEnvironmentRequestBody;
}


export class ReposCreateOrUpdateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  environment?: shared.Environment;
}
