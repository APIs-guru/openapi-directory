package shared

import (
	"time"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnumProvisioning Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum = "provisioning"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnumRunning      Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum = "running"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnumDraining     Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum = "draining"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnumDeleting     Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum = "deleting"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatus struct {
	State *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatusStateEnum `json:"state"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodes struct {
	CreatedAt *time.Time                                                                                                                                       `json:"created_at"`
	DropletID *string                                                                                                                                          `json:"droplet_id"`
	ID        *string                                                                                                                                          `json:"id"`
	Name      *string                                                                                                                                          `json:"name"`
	Status    *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodesStatus `json:"status"`
	UpdatedAt *time.Time                                                                                                                                       `json:"updated_at"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum string

const (
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnumNoSchedule       Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum = "NoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnumPreferNoSchedule Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum = "PreferNoSchedule"
	Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnumNoExecute        Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum = "NoExecute"
)

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints struct {
	Effect *Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum `json:"effect"`
	Key    *string                                                                                                                                               `json:"key"`
	Value  *string                                                                                                                                               `json:"value"`
}

type Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItems struct {
	AutoScale *bool                                                                                                                                        `json:"auto_scale"`
	Count     int64                                                                                                                                        `json:"count"`
	ID        *string                                                                                                                                      `json:"id"`
	Labels    map[string]interface{}                                                                                                                       `json:"labels"`
	MaxNodes  *int64                                                                                                                                       `json:"max_nodes"`
	MinNodes  *int64                                                                                                                                       `json:"min_nodes"`
	Name      string                                                                                                                                       `json:"name"`
	Nodes     []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsNodes  `json:"nodes"`
	Size      string                                                                                                                                       `json:"size"`
	Tags      []string                                                                                                                                     `json:"tags"`
	Taints    []Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints `json:"taints"`
}
