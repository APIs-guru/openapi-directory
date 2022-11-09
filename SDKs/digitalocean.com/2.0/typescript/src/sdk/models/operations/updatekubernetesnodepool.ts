import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateKubernetesNodePoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_pool_id" })
  nodePoolId: string;
}

export enum UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum {
    Provisioning = "provisioning"
,    Running = "running"
,    Draining = "draining"
,    Deleting = "deleting"
}


// UpdateKubernetesNodePoolRequestBodyNodesStatus
/** 
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
**/
export class UpdateKubernetesNodePoolRequestBodyNodesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum;
}


export class UpdateKubernetesNodePoolRequestBodyNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_id" })
  dropletId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: UpdateKubernetesNodePoolRequestBodyNodesStatus;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}

export enum UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum {
    NoSchedule = "NoSchedule"
,    PreferNoSchedule = "PreferNoSchedule"
,    NoExecute = "NoExecute"
}


export class UpdateKubernetesNodePoolRequestBodyTaints extends SpeakeasyBase {
  @Metadata({ data: "json, name=effect" })
  effect?: UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateKubernetesNodePoolRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_scale" })
  autoScale?: boolean;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=max_nodes" })
  maxNodes?: number;

  @Metadata({ data: "json, name=min_nodes" })
  minNodes?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nodes", elemType: operations.UpdateKubernetesNodePoolRequestBodyNodes })
  nodes?: UpdateKubernetesNodePoolRequestBodyNodes[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=taints", elemType: operations.UpdateKubernetesNodePoolRequestBodyTaints })
  taints?: UpdateKubernetesNodePoolRequestBodyTaints[];
}


export class UpdateKubernetesNodePoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateKubernetesNodePoolPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateKubernetesNodePoolRequestBody;
}


export class UpdateKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateKubernetesNodePoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateKubernetesNodePool202ApplicationJsonAny?: any;

  @Metadata()
  updateKubernetesNodePool401ApplicationJsonObject?: UpdateKubernetesNodePool401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
