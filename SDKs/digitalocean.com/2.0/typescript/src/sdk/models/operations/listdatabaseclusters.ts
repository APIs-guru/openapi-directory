import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDatabaseClustersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tag_name" })
  tagName?: string;
}


export class ListDatabaseClustersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDatabaseClustersQueryParams;
}


export class ListDatabaseClusters401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDatabaseClustersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDatabaseClusters200ApplicationJsonAny?: any;

  @Metadata()
  listDatabaseClusters401ApplicationJsonObject?: ListDatabaseClusters401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
