package shared

type SendEstimationToClientAPIModel struct {
	AttachPdf    *bool   `json:"AttachPdf,omitempty" form:"name=AttachPdf"`
	EstimationID *int32  `json:"EstimationId,omitempty" form:"name=EstimationId"`
	ID           *int32  `json:"Id,omitempty" form:"name=Id"`
	Message      *string `json:"Message,omitempty" form:"name=Message"`
	SendToSelf   *bool   `json:"SendToSelf,omitempty" form:"name=SendToSelf"`
	Subject      *string `json:"Subject,omitempty" form:"name=Subject"`
}
