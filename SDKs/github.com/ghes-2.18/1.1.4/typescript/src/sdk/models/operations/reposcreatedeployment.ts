import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateDeploymentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_merge" })
  autoMerge?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: any;

  @Metadata({ data: "json, name=production_environment" })
  productionEnvironment?: boolean;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=required_contexts" })
  requiredContexts?: string[];

  @Metadata({ data: "json, name=task" })
  task?: string;

  @Metadata({ data: "json, name=transient_environment" })
  transientEnvironment?: boolean;
}


export class ReposCreateDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateDeploymentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDeploymentRequestBody;
}


export class ReposCreateDeployment202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ReposCreateDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deployment?: shared.Deployment;

  @Metadata()
  reposCreateDeployment202ApplicationJsonObject?: ReposCreateDeployment202ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
