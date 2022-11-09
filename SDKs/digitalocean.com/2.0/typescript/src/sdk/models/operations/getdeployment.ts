import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: string;
}


export class GetDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeploymentPathParams;
}


export class GetDeployment401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeployment401ApplicationJsonObject?: GetDeployment401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @Metadata()
  onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema;
}
