package operations

type PostV1OrderScreenFormatEnum string

const (
	PostV1OrderScreenFormatEnumJSON PostV1OrderScreenFormatEnum = "json"
	PostV1OrderScreenFormatEnumXML  PostV1OrderScreenFormatEnum = "xml"
)

type PostV1OrderScreenQueryParams struct {
	Amount        *float64                     `queryParam:"style=form,explode=true,name=amount"`
	AvsResult     *string                      `queryParam:"style=form,explode=true,name=avs_result"`
	BillAddr      *string                      `queryParam:"style=form,explode=true,name=bill_addr"`
	BillCity      *string                      `queryParam:"style=form,explode=true,name=bill_city"`
	BillCountry   *string                      `queryParam:"style=form,explode=true,name=bill_country"`
	BillState     *string                      `queryParam:"style=form,explode=true,name=bill_state"`
	BillZipCode   *string                      `queryParam:"style=form,explode=true,name=bill_zip_code"`
	BinNo         *string                      `queryParam:"style=form,explode=true,name=bin_no"`
	CardHash      *string                      `queryParam:"style=form,explode=true,name=card_hash"`
	Currency      *string                      `queryParam:"style=form,explode=true,name=currency"`
	CvvResult     *string                      `queryParam:"style=form,explode=true,name=cvv_result"`
	Department    *string                      `queryParam:"style=form,explode=true,name=department"`
	Email         *string                      `queryParam:"style=form,explode=true,name=email"`
	EmailDomain   *string                      `queryParam:"style=form,explode=true,name=email_domain"`
	EmailHash     *string                      `queryParam:"style=form,explode=true,name=email_hash"`
	FirstName     *string                      `queryParam:"style=form,explode=true,name=first_name"`
	FlpChecksum   *string                      `queryParam:"style=form,explode=true,name=flp_checksum"`
	Format        *PostV1OrderScreenFormatEnum `queryParam:"style=form,explode=true,name=format"`
	IP            string                       `queryParam:"style=form,explode=true,name=ip"`
	Key           string                       `queryParam:"style=form,explode=true,name=key"`
	LastName      *string                      `queryParam:"style=form,explode=true,name=last_name"`
	PasswordHash  *string                      `queryParam:"style=form,explode=true,name=password_hash"`
	PaymentMode   *string                      `queryParam:"style=form,explode=true,name=payment_mode"`
	Quantity      *int64                       `queryParam:"style=form,explode=true,name=quantity"`
	ShipAddr      *string                      `queryParam:"style=form,explode=true,name=ship_addr"`
	ShipCity      *string                      `queryParam:"style=form,explode=true,name=ship_city"`
	ShipCountry   *string                      `queryParam:"style=form,explode=true,name=ship_country"`
	ShipState     *string                      `queryParam:"style=form,explode=true,name=ship_state"`
	ShipZipCode   *string                      `queryParam:"style=form,explode=true,name=ship_zip_code"`
	UserOrderID   *string                      `queryParam:"style=form,explode=true,name=user_order_id"`
	UserOrderMemo *string                      `queryParam:"style=form,explode=true,name=user_order_memo"`
	UserPhone     *string                      `queryParam:"style=form,explode=true,name=user_phone"`
	UsernameHash  *string                      `queryParam:"style=form,explode=true,name=username_hash"`
}

type PostV1OrderScreenRequest struct {
	QueryParams PostV1OrderScreenQueryParams
}

type PostV1OrderScreenResponse struct {
	ContentType                               string
	PostV1OrderScreen200ApplicationJSONString *string
	StatusCode                                int64
}
