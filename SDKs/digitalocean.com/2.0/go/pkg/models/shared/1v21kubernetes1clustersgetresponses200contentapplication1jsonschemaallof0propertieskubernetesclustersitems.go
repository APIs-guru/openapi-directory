package shared

import (
	"time"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumAny       Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "any"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumMonday    Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "monday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumTuesday   Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "tuesday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumWednesday Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "wednesday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumThursday  Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "thursday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumFriday    Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "friday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumSaturday  Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "saturday"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnumSunday    Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum = "sunday"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicy struct {
	Day       *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum `json:"day"`
	Duration  *string                                                                                                                               `json:"duration"`
	StartTime *string                                                                                                                               `json:"start_time"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnumProvisioning Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum = "provisioning"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnumRunning      Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum = "running"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnumDraining     Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum = "draining"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnumDeleting     Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum = "deleting"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatus struct {
	State *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatusStateEnum `json:"state"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodes struct {
	CreatedAt *time.Time                                                                                                                        `json:"created_at"`
	DropletID *string                                                                                                                           `json:"droplet_id"`
	ID        *string                                                                                                                           `json:"id"`
	Name      *string                                                                                                                           `json:"name"`
	Status    *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodesStatus `json:"status"`
	UpdatedAt *time.Time                                                                                                                        `json:"updated_at"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnumNoSchedule       Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum = "NoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnumPreferNoSchedule Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum = "PreferNoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnumNoExecute        Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum = "NoExecute"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints struct {
	Effect *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum `json:"effect"`
	Key    *string                                                                                                                                `json:"key"`
	Value  *string                                                                                                                                `json:"value"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePools struct {
	AutoScale *bool                                                                                                                         `json:"auto_scale"`
	Count     int64                                                                                                                         `json:"count"`
	ID        *string                                                                                                                       `json:"id"`
	Labels    map[string]interface{}                                                                                                        `json:"labels"`
	MaxNodes  *int64                                                                                                                        `json:"max_nodes"`
	MinNodes  *int64                                                                                                                        `json:"min_nodes"`
	Name      string                                                                                                                        `json:"name"`
	Nodes     []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsNodes  `json:"nodes"`
	Size      string                                                                                                                        `json:"size"`
	Tags      []string                                                                                                                      `json:"tags"`
	Taints    []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints `json:"taints"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnumRunning      Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum = "running"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnumProvisioning Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum = "provisioning"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnumDegraded     Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum = "degraded"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnumError        Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum = "error"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnumDeleted      Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum = "deleted"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnumUpgrading    Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum = "upgrading"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnumDeleting     Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum = "deleting"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatus struct {
	Message *string                                                                                                                      `json:"message"`
	State   *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatusStateEnum `json:"state"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItems struct {
	AutoUpgrade       *bool                                                                                                                          `json:"auto_upgrade"`
	ClusterSubnet     *string                                                                                                                        `json:"cluster_subnet"`
	CreatedAt         *time.Time                                                                                                                     `json:"created_at"`
	Endpoint          *string                                                                                                                        `json:"endpoint"`
	ID                *string                                                                                                                        `json:"id"`
	Ipv4              *string                                                                                                                        `json:"ipv4"`
	MaintenancePolicy *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicy `json:"maintenance_policy"`
	Name              string                                                                                                                         `json:"name"`
	NodePools         []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePools        `json:"node_pools"`
	Region            string                                                                                                                         `json:"region"`
	RegistryEnabled   *bool                                                                                                                          `json:"registry_enabled"`
	ServiceSubnet     *string                                                                                                                        `json:"service_subnet"`
	Status            *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsStatus            `json:"status"`
	SurgeUpgrade      *bool                                                                                                                          `json:"surge_upgrade"`
	Tags              []string                                                                                                                       `json:"tags"`
	UpdatedAt         *time.Time                                                                                                                     `json:"updated_at"`
	Version           string                                                                                                                         `json:"version"`
	VpcUUID           *string                                                                                                                        `json:"vpc_uuid"`
}
