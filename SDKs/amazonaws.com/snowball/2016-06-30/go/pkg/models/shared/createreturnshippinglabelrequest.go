package shared

type CreateReturnShippingLabelRequest struct {
	JobID          string              `json:"JobId"`
	ShippingOption *ShippingOptionEnum `json:"ShippingOption"`
}
