import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAppRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=spec" })
  spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}


export class CreateAppRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAppRequestBody;
}


export class CreateApp200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=app" })
  app?: shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems;
}


export class CreateApp401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createApp200ApplicationJsonObject?: CreateApp200ApplicationJson;

  @Metadata()
  createApp401ApplicationJsonObject?: CreateApp401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
