package shared

import (
"time")

type StudioComponent struct {
    Arn *string `json:"arn,omitempty"`
    Configuration *StudioComponentConfiguration `json:"configuration,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    Description *string `json:"description,omitempty"`
    Ec2SecurityGroupIds []string `json:"ec2SecurityGroupIds,omitempty"`
    InitializationScripts []StudioComponentInitializationScript `json:"initializationScripts,omitempty"`
    Name *string `json:"name,omitempty"`
    ScriptParameters []ScriptParameterKeyValue `json:"scriptParameters,omitempty"`
    State *StudioComponentStateEnum `json:"state,omitempty"`
    StatusCode *StudioComponentStatusCodeEnum `json:"statusCode,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    StudioComponentID *string `json:"studioComponentId,omitempty"`
    Subtype *StudioComponentSubtypeEnum `json:"subtype,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type *StudioComponentTypeEnum `json:"type,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *string `json:"updatedBy,omitempty"`
    
}

