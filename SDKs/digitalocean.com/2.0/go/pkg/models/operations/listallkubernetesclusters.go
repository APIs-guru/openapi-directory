package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAllKubernetesClustersQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllKubernetesClustersRequest struct {
	QueryParams ListAllKubernetesClustersQueryParams
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum string

const (
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumAny       ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "any"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumMonday    ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "monday"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumTuesday   ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "tuesday"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumWednesday ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "wednesday"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumThursday  ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "thursday"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumFriday    ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "friday"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumSaturday  ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "saturday"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnumSunday    ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum = "sunday"
)

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy struct {
	Day       *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum `json:"day,omitempty"`
	Duration  *string                                                                                `json:"duration,omitempty"`
	StartTime *string                                                                                `json:"start_time,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum string

const (
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumProvisioning ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "provisioning"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumRunning      ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "running"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumDraining     ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "draining"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumDeleting     ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "deleting"
)

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus struct {
	State *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum `json:"state,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes struct {
	CreatedAt *time.Time                                                                         `json:"created_at,omitempty"`
	DropletID *string                                                                            `json:"droplet_id,omitempty"`
	ID        *string                                                                            `json:"id,omitempty"`
	Name      *string                                                                            `json:"name,omitempty"`
	Status    *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus `json:"status,omitempty"`
	UpdatedAt *time.Time                                                                         `json:"updated_at,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum string

const (
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnumNoSchedule       ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum = "NoSchedule"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnumPreferNoSchedule ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum = "PreferNoSchedule"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnumNoExecute        ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum = "NoExecute"
)

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints struct {
	Effect *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum `json:"effect,omitempty"`
	Key    *string                                                                                 `json:"key,omitempty"`
	Value  *string                                                                                 `json:"value,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools struct {
	AutoScale *bool                                                                          `json:"auto_scale,omitempty"`
	Count     int64                                                                          `json:"count"`
	ID        *string                                                                        `json:"id,omitempty"`
	Labels    map[string]interface{}                                                         `json:"labels,omitempty"`
	MaxNodes  *int64                                                                         `json:"max_nodes,omitempty"`
	MinNodes  *int64                                                                         `json:"min_nodes,omitempty"`
	Name      string                                                                         `json:"name"`
	Nodes     []ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes  `json:"nodes,omitempty"`
	Size      string                                                                         `json:"size"`
	Tags      []string                                                                       `json:"tags,omitempty"`
	Taints    []ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints `json:"taints,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum string

const (
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnumRunning      ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum = "running"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnumProvisioning ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum = "provisioning"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnumDegraded     ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum = "degraded"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnumError        ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum = "error"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnumDeleted      ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum = "deleted"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnumUpgrading    ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum = "upgrading"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnumDeleting     ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum = "deleting"
)

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus struct {
	Message *string                                                                       `json:"message,omitempty"`
	State   *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum `json:"state,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClusters struct {
	AutoUpgrade       *bool                                                                           `json:"auto_upgrade,omitempty"`
	ClusterSubnet     *string                                                                         `json:"cluster_subnet,omitempty"`
	CreatedAt         *time.Time                                                                      `json:"created_at,omitempty"`
	Endpoint          *string                                                                         `json:"endpoint,omitempty"`
	ID                *string                                                                         `json:"id,omitempty"`
	Ipv4              *string                                                                         `json:"ipv4,omitempty"`
	MaintenancePolicy *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy `json:"maintenance_policy,omitempty"`
	Name              string                                                                          `json:"name"`
	NodePools         []ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools        `json:"node_pools"`
	Region            string                                                                          `json:"region"`
	RegistryEnabled   *bool                                                                           `json:"registry_enabled,omitempty"`
	ServiceSubnet     *string                                                                         `json:"service_subnet,omitempty"`
	Status            *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus            `json:"status,omitempty"`
	SurgeUpgrade      *bool                                                                           `json:"surge_upgrade,omitempty"`
	Tags              []string                                                                        `json:"tags,omitempty"`
	UpdatedAt         *time.Time                                                                      `json:"updated_at,omitempty"`
	Version           string                                                                          `json:"version"`
	VpcUUID           *string                                                                         `json:"vpc_uuid,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllKubernetesClusters200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllKubernetesClusters200ApplicationJSON struct {
	KubernetesClusters []ListAllKubernetesClusters200ApplicationJSONKubernetesClusters `json:"kubernetes_clusters,omitempty"`
	Links              *ListAllKubernetesClusters200ApplicationJSONLinks               `json:"links,omitempty"`
	Meta               ListAllKubernetesClusters200ApplicationJSONMeta                 `json:"meta"`
}

type ListAllKubernetesClusters401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllKubernetesClustersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllKubernetesClusters200ApplicationJSONObject         *ListAllKubernetesClusters200ApplicationJSON
	ListAllKubernetesClusters401ApplicationJSONObject         *ListAllKubernetesClusters401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
