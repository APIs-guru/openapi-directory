package shared

type APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum string

const (
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumSimple                APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "Simple"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumRandomDestination     APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "RandomDestination"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumDestinationByLanguage APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "DestinationByLanguage"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumSpilloverDestination  APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "SpilloverDestination"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumDynamicURL            APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "DynamicUrl"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumBrowserDestination    APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "BrowserDestination"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumDestinationByNation   APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "DestinationByNation"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumUniqueDestination     APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "UniqueDestination"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumSequentialDestination APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "SequentialDestination"
	APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnumWeightedDestination   APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum = "WeightedDestination"
)

type APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum string

const (
	APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumPermanentRedirect APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum = "PermanentRedirect"
	APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnumTemporaryRedirect APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum = "TemporaryRedirect"
)

type APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum string

const (
	APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumNone   APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum = "None"
	APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumClean  APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum = "Clean"
	APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnumMyself APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum = "Myself"
)

type APICoreDtoDatapointsTrackingLinkSpecifics struct {
	AppendQuery                *bool                                                         `json:"appendQuery,omitempty"`
	BrowserDestinationItem     *APICoreDtoDatapointsBrowserBaseDestinationItem               `json:"browserDestinationItem,omitempty"`
	DestinationMode            *APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum `json:"destinationMode,omitempty"`
	DomainID                   *int32                                                        `json:"domainId,omitempty"`
	EncodeURL                  *bool                                                         `json:"encodeUrl,omitempty"`
	ExpirationClicks           *int64                                                        `json:"expirationClicks,omitempty"`
	ExpirationDate             *string                                                       `json:"expirationDate,omitempty"`
	FirstURL                   *string                                                       `json:"firstUrl,omitempty"`
	GoDomainID                 *int32                                                        `json:"goDomainId,omitempty"`
	HideURL                    *bool                                                         `json:"hideUrl,omitempty"`
	HideURLTitle               *string                                                       `json:"hideUrlTitle,omitempty"`
	IsAbTest                   *bool                                                         `json:"isABTest,omitempty"`
	Password                   *string                                                       `json:"password,omitempty"`
	PauseAfterClicksExpiration *bool                                                         `json:"pauseAfterClicksExpiration,omitempty"`
	PauseAfterDateExpiration   *bool                                                         `json:"pauseAfterDateExpiration,omitempty"`
	RandomDestinationItems     []APICoreDtoDatapointsMultipleDestinationItem                 `json:"randomDestinationItems,omitempty"`
	RedirectType               *APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum    `json:"redirectType,omitempty"`
	ReferrerClean              *APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum   `json:"referrerClean,omitempty"`
	Scripts                    []APICoreDtoDatapointsDatapointRetargetingInfo                `json:"scripts,omitempty"`
	SequentialDestinationItems []APICoreDtoDatapointsMultipleDestinationItem                 `json:"sequentialDestinationItems,omitempty"`
	SpilloverDestinationItems  []APICoreDtoDatapointsMultipleDestinationItem                 `json:"spilloverDestinationItems,omitempty"`
	UniqueDestinationItem      *APICoreDtoDatapointsUniqueDestinationItem                    `json:"uniqueDestinationItem,omitempty"`
	URL                        *string                                                       `json:"url,omitempty"`
	URLAfterClicksExpiration   *string                                                       `json:"urlAfterClicksExpiration,omitempty"`
	URLAfterDateExpiration     *string                                                       `json:"urlAfterDateExpiration,omitempty"`
	UrlsByLanguage             []APICoreDtoDatapointsURLByLanguageItem                       `json:"urlsByLanguage,omitempty"`
	UrlsByNation               []APICoreDtoDatapointsURLByNationItem                         `json:"urlsByNation,omitempty"`
	WeightedDestinationItems   []APICoreDtoDatapointsWeightedDestinationItem                 `json:"weightedDestinationItems,omitempty"`
}
