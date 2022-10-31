package shared



type SendInvoiceToClientAPIModel struct {
    AttachPdf *bool `json:"AttachPdf,omitempty" form:"name=AttachPdf"`
    ID *int32 `json:"Id,omitempty" form:"name=Id"`
    InvoiceID *int32 `json:"InvoiceId,omitempty" form:"name=InvoiceId"`
    Message *string `json:"Message,omitempty" form:"name=Message"`
    SendToSelf *bool `json:"SendToSelf,omitempty" form:"name=SendToSelf"`
    Subject *string `json:"Subject,omitempty" form:"name=Subject"`
    
}

