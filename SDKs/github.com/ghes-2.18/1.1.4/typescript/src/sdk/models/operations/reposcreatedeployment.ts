import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateDeploymentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_merge" })
  autoMerge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: any;

  @SpeakeasyMetadata({ data: "json, name=production_environment" })
  productionEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=required_contexts" })
  requiredContexts?: string[];

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: string;

  @SpeakeasyMetadata({ data: "json, name=transient_environment" })
  transientEnvironment?: boolean;
}


export class ReposCreateDeployment202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ReposCreateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateDeploymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDeploymentRequestBody;
}


export class ReposCreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deployment?: shared.Deployment;

  @SpeakeasyMetadata()
  reposCreateDeployment202ApplicationJsonObject?: ReposCreateDeployment202ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
