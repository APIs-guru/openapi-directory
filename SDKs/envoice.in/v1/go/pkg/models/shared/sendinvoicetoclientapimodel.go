package shared

type SendInvoiceToClientAPIModel struct {
	AttachPdf  *bool   `json:"AttachPdf" form:"name=AttachPdf"`
	ID         *int32  `json:"Id" form:"name=Id"`
	InvoiceID  *int32  `json:"InvoiceId" form:"name=InvoiceId"`
	Message    *string `json:"Message" form:"name=Message"`
	SendToSelf *bool   `json:"SendToSelf" form:"name=SendToSelf"`
	Subject    *string `json:"Subject" form:"name=Subject"`
}
