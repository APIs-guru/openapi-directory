import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssignProjectResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class AssignProjectResourcesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resources" })
  resources?: string[];
}


export class AssignProjectResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssignProjectResourcesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssignProjectResourcesRequestBody;
}


export class AssignProjectResources200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=resources", elemType: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems })
  resources?: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems[];
}


export class AssignProjectResources401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AssignProjectResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  assignProjectResources200ApplicationJsonObject?: AssignProjectResources200ApplicationJson;

  @Metadata()
  assignProjectResources401ApplicationJsonObject?: AssignProjectResources401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
