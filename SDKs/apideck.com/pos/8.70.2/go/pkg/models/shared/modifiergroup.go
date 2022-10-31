package shared

import (
"time")


type ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum string

const (
    ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnumSingle ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum = "single"
ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnumMultiple ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum = "multiple"
)


type ModifierGroup struct {
    AlternateName *string `json:"alternate_name,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    ID *string `json:"id,omitempty"`
    MaximumAllowed *int64 `json:"maximum_allowed,omitempty"`
    MinimumRequired *int64 `json:"minimum_required,omitempty"`
    Modifiers []interface{} `json:"modifiers,omitempty"`
    Name *string `json:"name,omitempty"`
    PresentAtAllLocations *bool `json:"present_at_all_locations,omitempty"`
    RowVersion *string `json:"row_version,omitempty"`
    SelectionType *ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum `json:"selection_type,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    
}

