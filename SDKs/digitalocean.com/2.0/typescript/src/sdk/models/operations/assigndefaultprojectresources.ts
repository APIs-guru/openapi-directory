import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssignDefaultProjectResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema;
}


export class AssignDefaultProjectResources200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=resources", elemType: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems })
  resources?: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems[];
}


export class AssignDefaultProjectResources401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AssignDefaultProjectResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  assignDefaultProjectResources200ApplicationJsonObject?: AssignDefaultProjectResources200ApplicationJson;

  @Metadata()
  assignDefaultProjectResources401ApplicationJsonObject?: AssignDefaultProjectResources401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
