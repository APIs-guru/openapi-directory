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
	AppendQuery                *bool                                                         `json:"appendQuery"`
	BrowserDestinationItem     *APICoreDtoDatapointsBrowserBaseDestinationItem               `json:"browserDestinationItem"`
	DestinationMode            *APICoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum `json:"destinationMode"`
	DomainID                   *int32                                                        `json:"domainId"`
	EncodeURL                  *bool                                                         `json:"encodeUrl"`
	ExpirationClicks           *int64                                                        `json:"expirationClicks"`
	ExpirationDate             *string                                                       `json:"expirationDate"`
	FirstURL                   *string                                                       `json:"firstUrl"`
	GoDomainID                 *int32                                                        `json:"goDomainId"`
	HideURL                    *bool                                                         `json:"hideUrl"`
	HideURLTitle               *string                                                       `json:"hideUrlTitle"`
	IsAbTest                   *bool                                                         `json:"isABTest"`
	Password                   *string                                                       `json:"password"`
	PauseAfterClicksExpiration *bool                                                         `json:"pauseAfterClicksExpiration"`
	PauseAfterDateExpiration   *bool                                                         `json:"pauseAfterDateExpiration"`
	RandomDestinationItems     []APICoreDtoDatapointsMultipleDestinationItem                 `json:"randomDestinationItems"`
	RedirectType               *APICoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum    `json:"redirectType"`
	ReferrerClean              *APICoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum   `json:"referrerClean"`
	Scripts                    []APICoreDtoDatapointsDatapointRetargetingInfo                `json:"scripts"`
	SequentialDestinationItems []APICoreDtoDatapointsMultipleDestinationItem                 `json:"sequentialDestinationItems"`
	SpilloverDestinationItems  []APICoreDtoDatapointsMultipleDestinationItem                 `json:"spilloverDestinationItems"`
	UniqueDestinationItem      *APICoreDtoDatapointsUniqueDestinationItem                    `json:"uniqueDestinationItem"`
	URL                        *string                                                       `json:"url"`
	URLAfterClicksExpiration   *string                                                       `json:"urlAfterClicksExpiration"`
	URLAfterDateExpiration     *string                                                       `json:"urlAfterDateExpiration"`
	UrlsByLanguage             []APICoreDtoDatapointsURLByLanguageItem                       `json:"urlsByLanguage"`
	UrlsByNation               []APICoreDtoDatapointsURLByNationItem                         `json:"urlsByNation"`
	WeightedDestinationItems   []APICoreDtoDatapointsWeightedDestinationItem                 `json:"weightedDestinationItems"`
}
