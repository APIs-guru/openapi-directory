package shared

import (
"time")

type EnabledServicePrincipal struct {
    DateEnabled *time.Time `json:"DateEnabled,omitempty"`
    ServicePrincipal *string `json:"ServicePrincipal,omitempty"`
    
}

