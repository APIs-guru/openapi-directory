import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDropletNeighborsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletNeighborsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDropletNeighborsPathParams;
}


export class ListDropletNeighbors200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplets", elemType: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems })
  droplets?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems[];
}


export class ListDropletNeighbors401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletNeighborsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDropletNeighbors200ApplicationJsonObject?: ListDropletNeighbors200ApplicationJson;

  @Metadata()
  listDropletNeighbors401ApplicationJsonObject?: ListDropletNeighbors401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
