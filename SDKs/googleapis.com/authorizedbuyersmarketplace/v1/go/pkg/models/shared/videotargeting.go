package shared

type VideoTargetingExcludedPositionTypesEnum string

const (
	VideoTargetingExcludedPositionTypesEnumPositionTypeUnspecified VideoTargetingExcludedPositionTypesEnum = "POSITION_TYPE_UNSPECIFIED"
	VideoTargetingExcludedPositionTypesEnumPreroll                 VideoTargetingExcludedPositionTypesEnum = "PREROLL"
	VideoTargetingExcludedPositionTypesEnumMidroll                 VideoTargetingExcludedPositionTypesEnum = "MIDROLL"
	VideoTargetingExcludedPositionTypesEnumPostroll                VideoTargetingExcludedPositionTypesEnum = "POSTROLL"
)

type VideoTargetingTargetedPositionTypesEnum string

const (
	VideoTargetingTargetedPositionTypesEnumPositionTypeUnspecified VideoTargetingTargetedPositionTypesEnum = "POSITION_TYPE_UNSPECIFIED"
	VideoTargetingTargetedPositionTypesEnumPreroll                 VideoTargetingTargetedPositionTypesEnum = "PREROLL"
	VideoTargetingTargetedPositionTypesEnumMidroll                 VideoTargetingTargetedPositionTypesEnum = "MIDROLL"
	VideoTargetingTargetedPositionTypesEnumPostroll                VideoTargetingTargetedPositionTypesEnum = "POSTROLL"
)

type VideoTargeting struct {
	ExcludedPositionTypes []VideoTargetingExcludedPositionTypesEnum `json:"excludedPositionTypes"`
	TargetedPositionTypes []VideoTargetingTargetedPositionTypesEnum `json:"targetedPositionTypes"`
}
