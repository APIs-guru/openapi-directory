package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateKubernetesNodePoolPathParams struct {
	ClusterID  string `pathParam:"style=simple,explode=false,name=cluster_id"`
	NodePoolID string `pathParam:"style=simple,explode=false,name=node_pool_id"`
}

type UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum string

const (
	UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumProvisioning UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "provisioning"
	UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumRunning      UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "running"
	UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumDraining     UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "draining"
	UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumDeleting     UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "deleting"
)

type UpdateKubernetesNodePoolRequestBodyNodesStatus struct {
	State *UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum `json:"state"`
}

type UpdateKubernetesNodePoolRequestBodyNodes struct {
	CreatedAt *time.Time                                      `json:"created_at"`
	DropletID *string                                         `json:"droplet_id"`
	ID        *string                                         `json:"id"`
	Name      *string                                         `json:"name"`
	Status    *UpdateKubernetesNodePoolRequestBodyNodesStatus `json:"status"`
	UpdatedAt *time.Time                                      `json:"updated_at"`
}

type UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum string

const (
	UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumNoSchedule       UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "NoSchedule"
	UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumPreferNoSchedule UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "PreferNoSchedule"
	UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumNoExecute        UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "NoExecute"
)

type UpdateKubernetesNodePoolRequestBodyTaints struct {
	Effect *UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum `json:"effect"`
	Key    *string                                              `json:"key"`
	Value  *string                                              `json:"value"`
}

type UpdateKubernetesNodePoolRequestBody struct {
	AutoScale *bool                                       `json:"auto_scale"`
	Count     int64                                       `json:"count"`
	ID        *string                                     `json:"id"`
	Labels    map[string]interface{}                      `json:"labels"`
	MaxNodes  *int64                                      `json:"max_nodes"`
	MinNodes  *int64                                      `json:"min_nodes"`
	Name      string                                      `json:"name"`
	Nodes     []UpdateKubernetesNodePoolRequestBodyNodes  `json:"nodes"`
	Tags      []string                                    `json:"tags"`
	Taints    []UpdateKubernetesNodePoolRequestBodyTaints `json:"taints"`
}

type UpdateKubernetesNodePoolRequest struct {
	PathParams UpdateKubernetesNodePoolPathParams
	Request    UpdateKubernetesNodePoolRequestBody `request:"mediaType=application/json"`
}

type UpdateKubernetesNodePool401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateKubernetesNodePoolResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateKubernetesNodePool202ApplicationJSONAny             *interface{}
	UpdateKubernetesNodePool401ApplicationJSONObject          *UpdateKubernetesNodePool401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
