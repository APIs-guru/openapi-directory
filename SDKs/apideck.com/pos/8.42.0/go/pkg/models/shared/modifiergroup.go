package shared

import (
	"time"
)

type ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum string

const (
	ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnumSingle   ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum = "single"
	ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnumMultiple ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum = "multiple"
)

type ModifierGroup struct {
	AlternateName         *string                                                                                                                    `json:"alternate_name"`
	CreatedAt             *time.Time                                                                                                                 `json:"created_at"`
	CreatedBy             *string                                                                                                                    `json:"created_by"`
	Deleted               *bool                                                                                                                      `json:"deleted"`
	ID                    *string                                                                                                                    `json:"id"`
	MaximumAllowed        *int64                                                                                                                     `json:"maximum_allowed"`
	MinimumRequired       *int64                                                                                                                     `json:"minimum_required"`
	Modifiers             []interface{}                                                                                                              `json:"modifiers"`
	Name                  *string                                                                                                                    `json:"name"`
	PresentAtAllLocations *bool                                                                                                                      `json:"present_at_all_locations"`
	RowVersion            *string                                                                                                                    `json:"row_version"`
	SelectionType         *ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum `json:"selection_type"`
	UpdatedAt             *time.Time                                                                                                                 `json:"updated_at"`
	UpdatedBy             *string                                                                                                                    `json:"updated_by"`
}
