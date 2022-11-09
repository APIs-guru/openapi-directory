import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodePoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_pool_id" })
  nodePoolId: string;
}


export class GetNodePoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodePoolPathParams;
}


export class GetNodePool401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetNodePoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodePool200ApplicationJsonAny?: any;

  @Metadata()
  getNodePool401ApplicationJsonObject?: GetNodePool401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
