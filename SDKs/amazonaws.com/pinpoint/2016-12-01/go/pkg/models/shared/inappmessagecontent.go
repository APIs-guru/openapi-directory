package shared

type InAppMessageContent struct {
	BackgroundColor *string                   `json:"BackgroundColor"`
	BodyConfig      *InAppMessageBodyConfig   `json:"BodyConfig"`
	HeaderConfig    *InAppMessageHeaderConfig `json:"HeaderConfig"`
	ImageURL        *string                   `json:"ImageUrl"`
	PrimaryBtn      *InAppMessageButton       `json:"PrimaryBtn"`
	SecondaryBtn    *InAppMessageButton       `json:"SecondaryBtn"`
}
