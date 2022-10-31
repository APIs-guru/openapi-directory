package shared




type ItvVoucherOfferTypeEnum string

const (
    ItvVoucherOfferTypeEnumStripe ItvVoucherOfferTypeEnum = "stripe"
ItvVoucherOfferTypeEnumTalonOne ItvVoucherOfferTypeEnum = "talon one"
)


type ItvVoucher struct {
    Display map[string]interface{} `json:"display"`
    ID string `json:"id"`
    Links map[string]interface{} `json:"links"`
    OfferType ItvVoucherOfferTypeEnum `json:"offerType"`
    
}

