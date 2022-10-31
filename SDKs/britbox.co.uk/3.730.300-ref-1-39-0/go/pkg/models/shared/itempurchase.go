package shared




type ItemPurchaseOwnershipEnum string

const (
    ItemPurchaseOwnershipEnumSubscription ItemPurchaseOwnershipEnum = "Subscription"
ItemPurchaseOwnershipEnumFree ItemPurchaseOwnershipEnum = "Free"
ItemPurchaseOwnershipEnumRent ItemPurchaseOwnershipEnum = "Rent"
ItemPurchaseOwnershipEnumOwn ItemPurchaseOwnershipEnum = "Own"
ItemPurchaseOwnershipEnumNone ItemPurchaseOwnershipEnum = "None"
)



type ItemPurchaseResolutionEnum string

const (
    ItemPurchaseResolutionEnumSd ItemPurchaseResolutionEnum = "SD"
ItemPurchaseResolutionEnumHd720 ItemPurchaseResolutionEnum = "HD-720"
ItemPurchaseResolutionEnumHd1080 ItemPurchaseResolutionEnum = "HD-1080"
ItemPurchaseResolutionEnumHd4K ItemPurchaseResolutionEnum = "HD-4K"
ItemPurchaseResolutionEnumExternal ItemPurchaseResolutionEnum = "External"
ItemPurchaseResolutionEnumUnknown ItemPurchaseResolutionEnum = "Unknown"
)



type ItemPurchaseTypeEnum string

const (
    ItemPurchaseTypeEnumMovie ItemPurchaseTypeEnum = "movie"
ItemPurchaseTypeEnumShow ItemPurchaseTypeEnum = "show"
ItemPurchaseTypeEnumSeason ItemPurchaseTypeEnum = "season"
ItemPurchaseTypeEnumEpisode ItemPurchaseTypeEnum = "episode"
ItemPurchaseTypeEnumProgram ItemPurchaseTypeEnum = "program"
ItemPurchaseTypeEnumLink ItemPurchaseTypeEnum = "link"
ItemPurchaseTypeEnumTrailer ItemPurchaseTypeEnum = "trailer"
ItemPurchaseTypeEnumChannel ItemPurchaseTypeEnum = "channel"
ItemPurchaseTypeEnumCustomAsset ItemPurchaseTypeEnum = "customAsset"
)


type ItemPurchase struct {
    ID string `json:"id"`
    Ownership ItemPurchaseOwnershipEnum `json:"ownership"`
    Resolution ItemPurchaseResolutionEnum `json:"resolution"`
    Title string `json:"title"`
    Type ItemPurchaseTypeEnum `json:"type"`
    
}

