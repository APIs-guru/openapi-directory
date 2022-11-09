import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListKubernetesAssociatedResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class ListKubernetesAssociatedResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListKubernetesAssociatedResourcesPathParams;
}


export class ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// ListKubernetesAssociatedResources200ApplicationJson
/** 
 * An object containing the IDs of resources associated with a Kubernetes cluster.
**/
export class ListKubernetesAssociatedResources200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancers", elemType: operations.ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers })
  loadBalancers?: ListKubernetesAssociatedResources200ApplicationJsonLoadBalancers[];

  @Metadata({ data: "json, name=volume_snapshots", elemType: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems })
  volumeSnapshots?: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[];

  @Metadata({ data: "json, name=volumes", elemType: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems })
  volumes?: shared.Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems[];
}


export class ListKubernetesAssociatedResources401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListKubernetesAssociatedResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listKubernetesAssociatedResources200ApplicationJsonObject?: ListKubernetesAssociatedResources200ApplicationJson;

  @Metadata()
  listKubernetesAssociatedResources401ApplicationJsonObject?: ListKubernetesAssociatedResources401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
