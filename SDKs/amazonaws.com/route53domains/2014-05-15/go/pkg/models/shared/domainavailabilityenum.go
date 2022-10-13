package shared

type DomainAvailabilityEnum string

const (
	DomainAvailabilityEnumAvailable             DomainAvailabilityEnum = "AVAILABLE"
	DomainAvailabilityEnumAvailableReserved     DomainAvailabilityEnum = "AVAILABLE_RESERVED"
	DomainAvailabilityEnumAvailablePreorder     DomainAvailabilityEnum = "AVAILABLE_PREORDER"
	DomainAvailabilityEnumUnavailable           DomainAvailabilityEnum = "UNAVAILABLE"
	DomainAvailabilityEnumUnavailablePremium    DomainAvailabilityEnum = "UNAVAILABLE_PREMIUM"
	DomainAvailabilityEnumUnavailableRestricted DomainAvailabilityEnum = "UNAVAILABLE_RESTRICTED"
	DomainAvailabilityEnumReserved              DomainAvailabilityEnum = "RESERVED"
	DomainAvailabilityEnumDontKnow              DomainAvailabilityEnum = "DONT_KNOW"
)
