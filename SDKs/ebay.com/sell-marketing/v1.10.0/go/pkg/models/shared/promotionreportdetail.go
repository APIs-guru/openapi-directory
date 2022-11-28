package shared

// PromotionReportDetail
// This type defines the fields in a promotion-level report.
type PromotionReportDetail struct {
	AverageItemDiscount  *Amount `json:"averageItemDiscount,omitempty"`
	AverageItemRevenue   *Amount `json:"averageItemRevenue,omitempty"`
	AverageOrderDiscount *Amount `json:"averageOrderDiscount,omitempty"`
	AverageOrderRevenue  *Amount `json:"averageOrderRevenue,omitempty"`
	AverageOrderSize     *string `json:"averageOrderSize,omitempty"`
	BaseSale             *Amount `json:"baseSale,omitempty"`
	ItemsSoldQuantity    *int32  `json:"itemsSoldQuantity,omitempty"`
	NumberOfOrdersSold   *int32  `json:"numberOfOrdersSold,omitempty"`
	PercentageSalesLift  *string `json:"percentageSalesLift,omitempty"`
	PromotionHref        *string `json:"promotionHref,omitempty"`
	PromotionID          *string `json:"promotionId,omitempty"`
	PromotionReportID    *string `json:"promotionReportId,omitempty"`
	PromotionSale        *Amount `json:"promotionSale,omitempty"`
	PromotionType        *string `json:"promotionType,omitempty"`
	TotalDiscount        *Amount `json:"totalDiscount,omitempty"`
	TotalSale            *Amount `json:"totalSale,omitempty"`
}
