package operations

import (
"time"
"openapi/pkg/models/shared")

type UpdateKubernetesNodePoolPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    NodePoolID string `pathParam:"style=simple,explode=false,name=node_pool_id"`
    
}


type UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum string

const (
    UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumProvisioning UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "provisioning"
UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumRunning UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "running"
UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumDraining UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "draining"
UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnumDeleting UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum = "deleting"
)


type UpdateKubernetesNodePoolRequestBodyNodesStatus struct {
    State *UpdateKubernetesNodePoolRequestBodyNodesStatusStateEnum `json:"state,omitempty"`
    
}

type UpdateKubernetesNodePoolRequestBodyNodes struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DropletID *string `json:"droplet_id,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *UpdateKubernetesNodePoolRequestBodyNodesStatus `json:"status,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}


type UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum string

const (
    UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumNoSchedule UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "NoSchedule"
UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumPreferNoSchedule UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "PreferNoSchedule"
UpdateKubernetesNodePoolRequestBodyTaintsEffectEnumNoExecute UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = "NoExecute"
)


type UpdateKubernetesNodePoolRequestBodyTaints struct {
    Effect *UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum `json:"effect,omitempty"`
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type UpdateKubernetesNodePoolRequestBody struct {
    AutoScale *bool `json:"auto_scale,omitempty"`
    Count int64 `json:"count"`
    ID *string `json:"id,omitempty"`
    Labels map[string]interface{} `json:"labels,omitempty"`
    MaxNodes *int64 `json:"max_nodes,omitempty"`
    MinNodes *int64 `json:"min_nodes,omitempty"`
    Name string `json:"name"`
    Nodes []UpdateKubernetesNodePoolRequestBodyNodes `json:"nodes,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Taints []UpdateKubernetesNodePoolRequestBodyTaints `json:"taints,omitempty"`
    
}

type UpdateKubernetesNodePoolRequest struct {
    PathParams UpdateKubernetesNodePoolPathParams 
    Request UpdateKubernetesNodePoolRequestBody `request:"mediaType=application/json"`
    
}

type UpdateKubernetesNodePool401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateKubernetesNodePoolResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateKubernetesNodePool202ApplicationJSONAny *interface{} 
    UpdateKubernetesNodePool401ApplicationJSONObject *UpdateKubernetesNodePool401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

