package shared

import (
	"time"
)

// DestinyEntitiesVendorsDestinyVendorComponentProgression
// If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
type DestinyEntitiesVendorsDestinyVendorComponentProgression struct {
	CurrentProgress     *int32
	CurrentResetCount   *int32
	DailyLimit          *int32
	DailyProgress       *int32
	Level               *int32
	LevelCap            *int32
	NextLevelAt         *int32
	ProgressToNextLevel *int32
	ProgressionHash     *int64
	RewardItemStates    []int32
	SeasonResets        []DestinyDestinyProgressionResetEntry
	StepIndex           *int32
	WeeklyLimit         *int32
	WeeklyProgress      *int32
}

// DestinyEntitiesVendorsDestinyVendorComponent
// This component contains essential/summary information about the vendor.
type DestinyEntitiesVendorsDestinyVendorComponent struct {
	CanPurchase         *bool
	Enabled             *bool
	NextRefreshDate     *time.Time
	Progression         *DestinyEntitiesVendorsDestinyVendorComponentProgression
	SeasonalRank        *int32
	VendorHash          *int64
	VendorLocationIndex *int32
}
