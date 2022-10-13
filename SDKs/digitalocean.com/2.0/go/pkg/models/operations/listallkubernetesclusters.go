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
	Day       *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicyDayEnum `json:"day"`
	Duration  *string                                                                                `json:"duration"`
	StartTime *string                                                                                `json:"start_time"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum string

const (
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumProvisioning ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "provisioning"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumRunning      ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "running"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumDraining     ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "draining"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnumDeleting     ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum = "deleting"
)

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus struct {
	State *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatusStateEnum `json:"state"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes struct {
	CreatedAt *time.Time                                                                         `json:"created_at"`
	DropletID *string                                                                            `json:"droplet_id"`
	ID        *string                                                                            `json:"id"`
	Name      *string                                                                            `json:"name"`
	Status    *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodesStatus `json:"status"`
	UpdatedAt *time.Time                                                                         `json:"updated_at"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum string

const (
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnumNoSchedule       ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum = "NoSchedule"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnumPreferNoSchedule ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum = "PreferNoSchedule"
	ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnumNoExecute        ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum = "NoExecute"
)

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints struct {
	Effect *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaintsEffectEnum `json:"effect"`
	Key    *string                                                                                 `json:"key"`
	Value  *string                                                                                 `json:"value"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools struct {
	AutoScale *bool                                                                          `json:"auto_scale"`
	Count     int64                                                                          `json:"count"`
	ID        *string                                                                        `json:"id"`
	Labels    map[string]interface{}                                                         `json:"labels"`
	MaxNodes  *int64                                                                         `json:"max_nodes"`
	MinNodes  *int64                                                                         `json:"min_nodes"`
	Name      string                                                                         `json:"name"`
	Nodes     []ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsNodes  `json:"nodes"`
	Size      string                                                                         `json:"size"`
	Tags      []string                                                                       `json:"tags"`
	Taints    []ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePoolsTaints `json:"taints"`
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
	Message *string                                                                       `json:"message"`
	State   *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatusStateEnum `json:"state"`
}

type ListAllKubernetesClusters200ApplicationJSONKubernetesClusters struct {
	AutoUpgrade       *bool                                                                           `json:"auto_upgrade"`
	ClusterSubnet     *string                                                                         `json:"cluster_subnet"`
	CreatedAt         *time.Time                                                                      `json:"created_at"`
	Endpoint          *string                                                                         `json:"endpoint"`
	ID                *string                                                                         `json:"id"`
	Ipv4              *string                                                                         `json:"ipv4"`
	MaintenancePolicy *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersMaintenancePolicy `json:"maintenance_policy"`
	Name              string                                                                          `json:"name"`
	NodePools         []ListAllKubernetesClusters200ApplicationJSONKubernetesClustersNodePools        `json:"node_pools"`
	Region            string                                                                          `json:"region"`
	RegistryEnabled   *bool                                                                           `json:"registry_enabled"`
	ServiceSubnet     *string                                                                         `json:"service_subnet"`
	Status            *ListAllKubernetesClusters200ApplicationJSONKubernetesClustersStatus            `json:"status"`
	SurgeUpgrade      *bool                                                                           `json:"surge_upgrade"`
	Tags              []string                                                                        `json:"tags"`
	UpdatedAt         *time.Time                                                                      `json:"updated_at"`
	Version           string                                                                          `json:"version"`
	VpcUUID           *string                                                                         `json:"vpc_uuid"`
}

type ListAllKubernetesClusters200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllKubernetesClusters200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllKubernetesClusters200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllKubernetesClusters200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllKubernetesClusters200ApplicationJSON struct {
	KubernetesClusters []ListAllKubernetesClusters200ApplicationJSONKubernetesClusters `json:"kubernetes_clusters"`
	Links              *ListAllKubernetesClusters200ApplicationJSONLinks               `json:"links"`
	Meta               ListAllKubernetesClusters200ApplicationJSONMeta                 `json:"meta"`
}

type ListAllKubernetesClusters401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllKubernetesClustersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllKubernetesClusters200ApplicationJSONObject         *ListAllKubernetesClusters200ApplicationJSON
	ListAllKubernetesClusters401ApplicationJSONObject         *ListAllKubernetesClusters401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
