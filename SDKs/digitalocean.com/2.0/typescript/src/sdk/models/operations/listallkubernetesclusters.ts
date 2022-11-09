import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllKubernetesClustersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAllKubernetesClustersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAllKubernetesClustersQueryParams;
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum {
    Any = "any"
,    Monday = "monday"
,    Tuesday = "tuesday"
,    Wednesday = "wednesday"
,    Thursday = "thursday"
,    Friday = "friday"
,    Saturday = "saturday"
,    Sunday = "sunday"
}


// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy
/** 
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum {
    Provisioning = "provisioning"
,    Running = "running"
,    Draining = "draining"
,    Deleting = "deleting"
}


// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus
/** 
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
**/
export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum;
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_id" })
  dropletId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum {
    NoSchedule = "NoSchedule"
,    PreferNoSchedule = "PreferNoSchedule"
,    NoExecute = "NoExecute"
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints extends SpeakeasyBase {
  @Metadata({ data: "json, name=effect" })
  effect?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaintsEffectEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=nodes", elemType: operations.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes })
  nodes?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes[];

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=taints", elemType: operations.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints })
  taints?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsTaints[];
}

export enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum {
    Running = "running"
,    Provisioning = "provisioning"
,    Degraded = "degraded"
,    Error = "error"
,    Deleted = "deleted"
,    Upgrading = "upgrading"
,    Deleting = "deleting"
}


// ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus
/** 
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
**/
export class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum;
}


export class ListAllKubernetesClusters200ApplicationJsonKubernetesClusters extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_upgrade" })
  autoUpgrade?: boolean;

  @Metadata({ data: "json, name=cluster_subnet" })
  clusterSubnet?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ipv4" })
  ipv4?: string;

  @Metadata({ data: "json, name=maintenance_policy" })
  maintenancePolicy?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_pools", elemType: operations.ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools })
  nodePools: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools[];

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=registry_enabled" })
  registryEnabled?: boolean;

  @Metadata({ data: "json, name=service_subnet" })
  serviceSubnet?: string;

  @Metadata({ data: "json, name=status" })
  status?: ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus;

  @Metadata({ data: "json, name=surge_upgrade" })
  surgeUpgrade?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=version" })
  version: string;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllKubernetesClusters200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllKubernetesClusters200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllKubernetesClusters200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllKubernetesClusters200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=kubernetes_clusters", elemType: operations.ListAllKubernetesClusters200ApplicationJsonKubernetesClusters })
  kubernetesClusters?: ListAllKubernetesClusters200ApplicationJsonKubernetesClusters[];

  @Metadata({ data: "json, name=links" })
  links?: ListAllKubernetesClusters200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllKubernetesClusters200ApplicationJsonMeta;
}


export class ListAllKubernetesClusters401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllKubernetesClustersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllKubernetesClusters200ApplicationJsonObject?: ListAllKubernetesClusters200ApplicationJson;

  @Metadata()
  listAllKubernetesClusters401ApplicationJsonObject?: ListAllKubernetesClusters401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
