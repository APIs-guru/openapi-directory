package shared

import (
	"time"
)

// DestinyComponentsVendorsDestinyPublicVendorComponent
// This component contains essential/summary information about the vendor from the perspective of a character-agnostic view.
type DestinyComponentsVendorsDestinyPublicVendorComponent struct {
	Enabled         *bool
	NextRefreshDate *time.Time
	VendorHash      *int64
}
