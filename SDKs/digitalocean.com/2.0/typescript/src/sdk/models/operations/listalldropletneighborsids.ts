import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllDropletNeighborsIds200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=neighbor_ids" })
  neighborIds?: number[][];
}


export class ListAllDropletNeighborsIds401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDropletNeighborsIdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllDropletNeighborsIds200ApplicationJsonObject?: ListAllDropletNeighborsIds200ApplicationJson;

  @Metadata()
  listAllDropletNeighborsIds401ApplicationJsonObject?: ListAllDropletNeighborsIds401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
