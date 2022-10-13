package shared

type SendEstimationToClientAPIModel struct {
	AttachPdf    *bool   `json:"AttachPdf" form:"name=AttachPdf"`
	EstimationID *int32  `json:"EstimationId" form:"name=EstimationId"`
	ID           *int32  `json:"Id" form:"name=Id"`
	Message      *string `json:"Message" form:"name=Message"`
	SendToSelf   *bool   `json:"SendToSelf" form:"name=SendToSelf"`
	Subject      *string `json:"Subject" form:"name=Subject"`
}
