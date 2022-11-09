import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecycleKubernetesNodePoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_pool_id" })
  nodePoolId: string;
}


export class RecycleKubernetesNodePoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecycleKubernetesNodePoolPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RecycleKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class RecycleKubernetesNodePoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  recycleKubernetesNodePool401ApplicationJsonObject?: RecycleKubernetesNodePool401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
