package operations

type InvoiceAPIStatusQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type InvoiceAPIStatusHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type InvoiceAPIStatusRequest struct {
	QueryParams InvoiceAPIStatusQueryParams
	Headers     InvoiceAPIStatusHeaders
}

type InvoiceAPIStatus200ApplicationJSONEnum string

const (
	InvoiceAPIStatus200ApplicationJSONEnumDraft   InvoiceAPIStatus200ApplicationJSONEnum = "Draft"
	InvoiceAPIStatus200ApplicationJSONEnumPaid    InvoiceAPIStatus200ApplicationJSONEnum = "Paid"
	InvoiceAPIStatus200ApplicationJSONEnumUnpaid  InvoiceAPIStatus200ApplicationJSONEnum = "Unpaid"
	InvoiceAPIStatus200ApplicationJSONEnumOverdue InvoiceAPIStatus200ApplicationJSONEnum = "Overdue"
	InvoiceAPIStatus200ApplicationJSONEnumVoid    InvoiceAPIStatus200ApplicationJSONEnum = "Void"
)

type InvoiceAPIStatus200TextJSONEnum string

const (
	InvoiceAPIStatus200TextJSONEnumDraft   InvoiceAPIStatus200TextJSONEnum = "Draft"
	InvoiceAPIStatus200TextJSONEnumPaid    InvoiceAPIStatus200TextJSONEnum = "Paid"
	InvoiceAPIStatus200TextJSONEnumUnpaid  InvoiceAPIStatus200TextJSONEnum = "Unpaid"
	InvoiceAPIStatus200TextJSONEnumOverdue InvoiceAPIStatus200TextJSONEnum = "Overdue"
	InvoiceAPIStatus200TextJSONEnumVoid    InvoiceAPIStatus200TextJSONEnum = "Void"
)

type InvoiceAPIStatusResponse struct {
	Body                                         []byte
	ContentType                                  string
	InvoiceAPIStatus200ApplicationJSONStringEnum *InvoiceAPIStatus200ApplicationJSONEnum
	InvoiceAPIStatus200TextJSONStringEnum        *InvoiceAPIStatus200TextJSONEnum
	StatusCode                                   int64
}
