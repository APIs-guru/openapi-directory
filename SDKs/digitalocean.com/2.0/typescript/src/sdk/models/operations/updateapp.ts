import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateAppRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=spec" })
  spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}


export class UpdateAppRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAppPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAppRequestBody;
}


export class UpdateApp401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateApp401ApplicationJsonObject?: UpdateApp401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @Metadata()
  onev21appsPostResponses200ContentApplication1jsonSchema?: shared.Onev21appsPostResponses200ContentApplication1jsonSchema;
}
