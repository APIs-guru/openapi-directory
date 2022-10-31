package shared

import (
"time")

type Tender struct {
    Active *bool `json:"active,omitempty"`
    AllowsTipping *bool `json:"allows_tipping,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    Editable *bool `json:"editable,omitempty"`
    Hidden *bool `json:"hidden,omitempty"`
    ID *string `json:"id,omitempty"`
    Key *string `json:"key,omitempty"`
    Label *string `json:"label,omitempty"`
    OpensCashDrawer *bool `json:"opens_cash_drawer,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    
}

