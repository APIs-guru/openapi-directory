import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum {
    Any = "any"
,    Monday = "monday"
,    Tuesday = "tuesday"
,    Wednesday = "wednesday"
,    Thursday = "thursday"
,    Friday = "friday"
,    Saturday = "saturday"
,    Sunday = "sunday"
}


// Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicy
/** 
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;
}

export enum Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum {
    Provisioning = "provisioning"
,    Running = "running"
,    Draining = "draining"
,    Deleting = "deleting"
}


// Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatus
/** 
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
**/
export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum;
}


export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_id" })
  dropletId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatus;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}

export enum Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum {
    NoSchedule = "NoSchedule"
,    PreferNoSchedule = "PreferNoSchedule"
,    NoExecute = "NoExecute"
}


export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints extends SpeakeasyBase {
  @Metadata({ data: "json, name=effect" })
  effect?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePools extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=nodes", elemType: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodes })
  nodes?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodes[];

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=taints", elemType: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints })
  taints?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints[];
}

export enum Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum {
    Running = "running"
,    Provisioning = "provisioning"
,    Degraded = "degraded"
,    Error = "error"
,    Deleted = "deleted"
,    Upgrading = "upgrading"
,    Deleting = "deleting"
}


// Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatus
/** 
 * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
**/
export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum;
}


export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItems extends SpeakeasyBase {
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
  maintenancePolicy?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicy;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_pools", elemType: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePools })
  nodePools: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePools[];

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=registry_enabled" })
  registryEnabled?: boolean;

  @Metadata({ data: "json, name=service_subnet" })
  serviceSubnet?: string;

  @Metadata({ data: "json, name=status" })
  status?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatus;

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
