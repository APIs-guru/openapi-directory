import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class CreateDeploymentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=force_build" })
  forceBuild?: boolean;
}


export class CreateDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDeploymentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentRequestBody;
}


export class CreateDeployment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployment" })
  deployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;
}


export class CreateDeployment401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDeployment200ApplicationJsonObject?: CreateDeployment200ApplicationJson;

  @Metadata()
  createDeployment401ApplicationJsonObject?: CreateDeployment401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
