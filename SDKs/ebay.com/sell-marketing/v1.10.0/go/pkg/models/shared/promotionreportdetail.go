package shared

type PromotionReportDetail struct {
	AverageItemDiscount  *Amount `json:"averageItemDiscount"`
	AverageItemRevenue   *Amount `json:"averageItemRevenue"`
	AverageOrderDiscount *Amount `json:"averageOrderDiscount"`
	AverageOrderRevenue  *Amount `json:"averageOrderRevenue"`
	AverageOrderSize     *string `json:"averageOrderSize"`
	BaseSale             *Amount `json:"baseSale"`
	ItemsSoldQuantity    *int32  `json:"itemsSoldQuantity"`
	NumberOfOrdersSold   *int32  `json:"numberOfOrdersSold"`
	PercentageSalesLift  *string `json:"percentageSalesLift"`
	PromotionHref        *string `json:"promotionHref"`
	PromotionID          *string `json:"promotionId"`
	PromotionReportID    *string `json:"promotionReportId"`
	PromotionSale        *Amount `json:"promotionSale"`
	PromotionType        *string `json:"promotionType"`
	TotalDiscount        *Amount `json:"totalDiscount"`
	TotalSale            *Amount `json:"totalSale"`
}
