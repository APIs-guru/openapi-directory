import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DestroyKubernetesAssociatedResourcesSelectivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


// DestroyKubernetesAssociatedResourcesSelectiveRequestBody
/** 
 * An object containing the IDs of resources to be destroyed along with their associated with a Kubernetes cluster.
**/
export class DestroyKubernetesAssociatedResourcesSelectiveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancers" })
  loadBalancers?: string[];

  @Metadata({ data: "json, name=volume_snapshots" })
  volumeSnapshots?: string[];

  @Metadata({ data: "json, name=volumes" })
  volumes?: string[];
}


export class DestroyKubernetesAssociatedResourcesSelectiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DestroyKubernetesAssociatedResourcesSelectivePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: DestroyKubernetesAssociatedResourcesSelectiveRequestBody;
}


export class DestroyKubernetesAssociatedResourcesSelective401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DestroyKubernetesAssociatedResourcesSelectiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  destroyKubernetesAssociatedResourcesSelective401ApplicationJsonObject?: DestroyKubernetesAssociatedResourcesSelective401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
