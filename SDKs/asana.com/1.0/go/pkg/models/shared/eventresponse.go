package shared

import (
"time")

type EventResponseChange struct {
    Action *string `json:"action,omitempty"`
    AddedValue *interface{} `json:"added_value,omitempty"`
    Field *string `json:"field,omitempty"`
    NewValue *interface{} `json:"new_value,omitempty"`
    RemovedValue *interface{} `json:"removed_value,omitempty"`
    
}

type EventResponse struct {
    Action *string `json:"action,omitempty"`
    Change *EventResponseChange `json:"change,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Parent *AsanaNamedResource `json:"parent,omitempty"`
    Resource *AsanaNamedResource `json:"resource,omitempty"`
    Type *string `json:"type,omitempty"`
    User *UserCompact `json:"user,omitempty"`
    
}

