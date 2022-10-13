package shared

type ThreatIntelIndicatorCategoryEnum string

const (
	ThreatIntelIndicatorCategoryEnumBackdoor          ThreatIntelIndicatorCategoryEnum = "BACKDOOR"
	ThreatIntelIndicatorCategoryEnumCardStealer       ThreatIntelIndicatorCategoryEnum = "CARD_STEALER"
	ThreatIntelIndicatorCategoryEnumCommandAndControl ThreatIntelIndicatorCategoryEnum = "COMMAND_AND_CONTROL"
	ThreatIntelIndicatorCategoryEnumDropSite          ThreatIntelIndicatorCategoryEnum = "DROP_SITE"
	ThreatIntelIndicatorCategoryEnumExploitSite       ThreatIntelIndicatorCategoryEnum = "EXPLOIT_SITE"
	ThreatIntelIndicatorCategoryEnumKeylogger         ThreatIntelIndicatorCategoryEnum = "KEYLOGGER"
)
