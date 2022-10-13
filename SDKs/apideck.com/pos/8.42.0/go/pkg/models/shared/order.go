package shared

import (
	"time"
)

type OrderCustomers struct {
	Emails       []Email       `json:"emails"`
	FirstName    *string       `json:"first_name"`
	LastName     *string       `json:"last_name"`
	MiddleName   *string       `json:"middle_name"`
	PhoneNumbers []PhoneNumber `json:"phone_numbers"`
}

type OrderDiscountsScopeEnum string

const (
	OrderDiscountsScopeEnumOrder    OrderDiscountsScopeEnum = "order"
	OrderDiscountsScopeEnumLineItem OrderDiscountsScopeEnum = "line_item"
)

type OrderDiscountsTypeEnum string

const (
	OrderDiscountsTypeEnumPercentage OrderDiscountsTypeEnum = "percentage"
	OrderDiscountsTypeEnumFlatFee    OrderDiscountsTypeEnum = "flat_fee"
)

type OrderDiscounts struct {
	Amount    *int64                   `json:"amount"`
	Currency  *CurrencyEnum            `json:"currency"`
	ID        *string                  `json:"id"`
	Name      *string                  `json:"name"`
	ProductID *string                  `json:"product_id"`
	Scope     *OrderDiscountsScopeEnum `json:"scope"`
	Type      *OrderDiscountsTypeEnum  `json:"type"`
}

type OrderFulfillmentsPickupDetailsCurbsidePickupDetails struct {
	BuyerArrivedAt  *time.Time `json:"buyer_arrived_at"`
	CurbsideDetails *string    `json:"curbside_details"`
}

type OrderFulfillmentsPickupDetailsRecipient struct {
	Address     *Address     `json:"address"`
	CustomerID  *string      `json:"customer_id"`
	DisplayName *string      `json:"display_name"`
	Email       *Email       `json:"email"`
	PhoneNumber *PhoneNumber `json:"phone_number"`
}

type OrderFulfillmentsPickupDetailsScheduleTypeEnum string

const (
	OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled OrderFulfillmentsPickupDetailsScheduleTypeEnum = "scheduled"
)

type OrderFulfillmentsPickupDetails struct {
	AcceptedAt            *time.Time                                           `json:"accepted_at"`
	AutoCompleteDuration  *string                                              `json:"auto_complete_duration"`
	CancelReason          *string                                              `json:"cancel_reason"`
	CanceledAt            *time.Time                                           `json:"canceled_at"`
	CurbsidePickupDetails *OrderFulfillmentsPickupDetailsCurbsidePickupDetails `json:"curbside_pickup_details"`
	ExpiredAt             *time.Time                                           `json:"expired_at"`
	ExpiresAt             *time.Time                                           `json:"expires_at"`
	IsCurbsidePickup      *bool                                                `json:"is_curbside_pickup"`
	Note                  *string                                              `json:"note"`
	PickedUpAt            *time.Time                                           `json:"picked_up_at"`
	PickupAt              *time.Time                                           `json:"pickup_at"`
	PickupWindowDuration  *string                                              `json:"pickup_window_duration"`
	PlacedAt              *time.Time                                           `json:"placed_at"`
	PrepTimeDuration      *string                                              `json:"prep_time_duration"`
	ReadyAt               *time.Time                                           `json:"ready_at"`
	Recipient             *OrderFulfillmentsPickupDetailsRecipient             `json:"recipient"`
	RejectedAt            *time.Time                                           `json:"rejected_at"`
	ScheduleType          *OrderFulfillmentsPickupDetailsScheduleTypeEnum      `json:"schedule_type"`
}

type OrderFulfillmentsStatusFulfillmentStatusEnum string

const (
	OrderFulfillmentsStatusFulfillmentStatusEnumProposed  OrderFulfillmentsStatusFulfillmentStatusEnum = "proposed"
	OrderFulfillmentsStatusFulfillmentStatusEnumReserved  OrderFulfillmentsStatusFulfillmentStatusEnum = "reserved"
	OrderFulfillmentsStatusFulfillmentStatusEnumPrepared  OrderFulfillmentsStatusFulfillmentStatusEnum = "prepared"
	OrderFulfillmentsStatusFulfillmentStatusEnumCompleted OrderFulfillmentsStatusFulfillmentStatusEnum = "completed"
	OrderFulfillmentsStatusFulfillmentStatusEnumCancelled OrderFulfillmentsStatusFulfillmentStatusEnum = "cancelled"
	OrderFulfillmentsStatusFulfillmentStatusEnumFailed    OrderFulfillmentsStatusFulfillmentStatusEnum = "failed"
	OrderFulfillmentsStatusFulfillmentStatusEnumOther     OrderFulfillmentsStatusFulfillmentStatusEnum = "other"
)

type OrderFulfillmentsTypeEnum string

const (
	OrderFulfillmentsTypeEnumPickup   OrderFulfillmentsTypeEnum = "pickup"
	OrderFulfillmentsTypeEnumShipment OrderFulfillmentsTypeEnum = "shipment"
)

type OrderFulfillments struct {
	ID              *string                                       `json:"id"`
	PickupDetails   *OrderFulfillmentsPickupDetails               `json:"pickup_details"`
	ShipmentDetails map[string]interface{}                        `json:"shipment_details"`
	Status          *OrderFulfillmentsStatusFulfillmentStatusEnum `json:"status"`
	Type            *OrderFulfillmentsTypeEnum                    `json:"type"`
}

type OrderLineItems struct {
	AppliedDiscounts []interface{} `json:"applied_discounts"`
	AppliedTaxes     []interface{} `json:"applied_taxes"`
	ID               *string       `json:"id"`
	Item             *interface{}  `json:"item"`
	Modifiers        []interface{} `json:"modifiers"`
	Name             *string       `json:"name"`
	Quantity         *float64      `json:"quantity"`
	TotalAmount      *int64        `json:"total_amount"`
	TotalDiscount    *int64        `json:"total_discount"`
	TotalTax         *int64        `json:"total_tax"`
	UnitPrice        *float64      `json:"unit_price"`
}

type OrderPaymentStatusPosPaymentStatusEnum string

const (
	OrderPaymentStatusPosPaymentStatusEnumOpen              OrderPaymentStatusPosPaymentStatusEnum = "open"
	OrderPaymentStatusPosPaymentStatusEnumPaid              OrderPaymentStatusPosPaymentStatusEnum = "paid"
	OrderPaymentStatusPosPaymentStatusEnumRefunded          OrderPaymentStatusPosPaymentStatusEnum = "refunded"
	OrderPaymentStatusPosPaymentStatusEnumCredited          OrderPaymentStatusPosPaymentStatusEnum = "credited"
	OrderPaymentStatusPosPaymentStatusEnumPartiallyPaid     OrderPaymentStatusPosPaymentStatusEnum = "partially_paid"
	OrderPaymentStatusPosPaymentStatusEnumPartiallyRefunded OrderPaymentStatusPosPaymentStatusEnum = "partially_refunded"
	OrderPaymentStatusPosPaymentStatusEnumUnknown           OrderPaymentStatusPosPaymentStatusEnum = "unknown"
)

type OrderPayments struct {
	Amount   *int64        `json:"amount"`
	Currency *CurrencyEnum `json:"currency"`
	ID       *string       `json:"id"`
}

type OrderRefundsStatusEnum string

const (
	OrderRefundsStatusEnumPending  OrderRefundsStatusEnum = "pending"
	OrderRefundsStatusEnumApproved OrderRefundsStatusEnum = "approved"
	OrderRefundsStatusEnumRejected OrderRefundsStatusEnum = "rejected"
	OrderRefundsStatusEnumFailed   OrderRefundsStatusEnum = "failed"
)

type OrderRefunds struct {
	Amount        *int64                  `json:"amount"`
	Currency      *CurrencyEnum           `json:"currency"`
	ID            *string                 `json:"id"`
	LocationID    *string                 `json:"location_id"`
	Reason        *string                 `json:"reason"`
	Status        *OrderRefundsStatusEnum `json:"status"`
	TenderID      *string                 `json:"tender_id"`
	TransactionID *string                 `json:"transaction_id"`
}

type OrderSourceEnum string

const (
	OrderSourceEnumInStore  OrderSourceEnum = "in-store"
	OrderSourceEnumOnline   OrderSourceEnum = "online"
	OrderSourceEnumOpt      OrderSourceEnum = "opt"
	OrderSourceEnumAPI      OrderSourceEnum = "api"
	OrderSourceEnumKiosk    OrderSourceEnum = "kiosk"
	OrderSourceEnumCallerID OrderSourceEnum = "caller-id"
	OrderSourceEnumGoogle   OrderSourceEnum = "google"
	OrderSourceEnumInvoice  OrderSourceEnum = "invoice"
)

type OrderStatusStatusEnum string

const (
	OrderStatusStatusEnumOpen      OrderStatusStatusEnum = "open"
	OrderStatusStatusEnumDraft     OrderStatusStatusEnum = "draft"
	OrderStatusStatusEnumDelivered OrderStatusStatusEnum = "delivered"
	OrderStatusStatusEnumDelayed   OrderStatusStatusEnum = "delayed"
	OrderStatusStatusEnumVoided    OrderStatusStatusEnum = "voided"
	OrderStatusStatusEnumCompleted OrderStatusStatusEnum = "completed"
	OrderStatusStatusEnumHidden    OrderStatusStatusEnum = "hidden"
)

type OrderTendersCardEntryMethodEnum string

const (
	OrderTendersCardEntryMethodEnumEvm         OrderTendersCardEntryMethodEnum = "evm"
	OrderTendersCardEntryMethodEnumSwiped      OrderTendersCardEntryMethodEnum = "swiped"
	OrderTendersCardEntryMethodEnumKeyed       OrderTendersCardEntryMethodEnum = "keyed"
	OrderTendersCardEntryMethodEnumOnFile      OrderTendersCardEntryMethodEnum = "on-file"
	OrderTendersCardEntryMethodEnumContactless OrderTendersCardEntryMethodEnum = "contactless"
)

type OrderTendersCardStatusEnum string

const (
	OrderTendersCardStatusEnumAuthorized OrderTendersCardStatusEnum = "authorized"
	OrderTendersCardStatusEnumCaptured   OrderTendersCardStatusEnum = "captured"
	OrderTendersCardStatusEnumFailed     OrderTendersCardStatusEnum = "failed"
	OrderTendersCardStatusEnumVoided     OrderTendersCardStatusEnum = "voided"
)

type OrderTendersTypeEnum string

const (
	OrderTendersTypeEnumCash  OrderTendersTypeEnum = "cash"
	OrderTendersTypeEnumCard  OrderTendersTypeEnum = "card"
	OrderTendersTypeEnumOther OrderTendersTypeEnum = "other"
)

type OrderTenders struct {
	Amount                  *float64                         `json:"amount"`
	BuyerTenderedCashAmount *int64                           `json:"buyer_tendered_cash_amount"`
	Card                    *PaymentCard                     `json:"card"`
	CardEntryMethod         *OrderTendersCardEntryMethodEnum `json:"card_entry_method"`
	CardStatus              *OrderTendersCardStatusEnum      `json:"card_status"`
	ChangeBackCashAmount    *int64                           `json:"change_back_cash_amount"`
	Currency                *CurrencyEnum                    `json:"currency"`
	ID                      *string                          `json:"id"`
	LocationID              *string                          `json:"location_id"`
	Name                    *string                          `json:"name"`
	Note                    *string                          `json:"note"`
	PaymentID               *string                          `json:"payment_id"`
	Percentage              *float64                         `json:"percentage"`
	TotalAmount             *int64                           `json:"total_amount"`
	TotalDiscount           *int64                           `json:"total_discount"`
	TotalProcessingFee      *int64                           `json:"total_processing_fee"`
	TotalRefund             *int64                           `json:"total_refund"`
	TotalServiceCharge      *int64                           `json:"total_service_charge"`
	TotalTax                *int64                           `json:"total_tax"`
	TotalTip                *int64                           `json:"total_tip"`
	TransactionID           *string                          `json:"transaction_id"`
	Type                    *OrderTendersTypeEnum            `json:"type"`
}

type Order struct {
	ClosedDate         *time.Time                              `json:"closed_date"`
	CreatedAt          *time.Time                              `json:"created_at"`
	CreatedBy          *string                                 `json:"created_by"`
	Currency           *CurrencyEnum                           `json:"currency"`
	CustomerID         *string                                 `json:"customer_id"`
	Customers          []OrderCustomers                        `json:"customers"`
	Discounts          []OrderDiscounts                        `json:"discounts"`
	EmployeeID         *string                                 `json:"employee_id"`
	Fulfillments       []OrderFulfillments                     `json:"fulfillments"`
	ID                 *string                                 `json:"id"`
	IdempotencyKey     *string                                 `json:"idempotency_key"`
	LineItems          []OrderLineItems                        `json:"line_items"`
	LocationID         string                                  `json:"location_id"`
	MerchantID         string                                  `json:"merchant_id"`
	Note               *string                                 `json:"note"`
	OrderDate          *time.Time                              `json:"order_date"`
	OrderNumber        *string                                 `json:"order_number"`
	OrderTypeID        *string                                 `json:"order_type_id"`
	PaymentStatus      *OrderPaymentStatusPosPaymentStatusEnum `json:"payment_status"`
	Payments           []OrderPayments                         `json:"payments"`
	ReferenceID        *string                                 `json:"reference_id"`
	Refunded           *bool                                   `json:"refunded"`
	Refunds            []OrderRefunds                          `json:"refunds"`
	Seat               *string                                 `json:"seat"`
	ServiceCharges     []ServiceCharge                         `json:"service_charges"`
	Source             *OrderSourceEnum                        `json:"source"`
	Status             *OrderStatusStatusEnum                  `json:"status"`
	Table              *string                                 `json:"table"`
	Taxes              []interface{}                           `json:"taxes"`
	Tenders            []OrderTenders                          `json:"tenders"`
	Title              *string                                 `json:"title"`
	TotalAmount        *int64                                  `json:"total_amount"`
	TotalDiscount      *int64                                  `json:"total_discount"`
	TotalRefund        *int64                                  `json:"total_refund"`
	TotalServiceCharge *int64                                  `json:"total_service_charge"`
	TotalTax           *int64                                  `json:"total_tax"`
	TotalTip           *int64                                  `json:"total_tip"`
	UpdatedAt          *time.Time                              `json:"updated_at"`
	UpdatedBy          *string                                 `json:"updated_by"`
	Version            *string                                 `json:"version"`
	Voided             *bool                                   `json:"voided"`
	VoidedAt           *time.Time                              `json:"voided_at"`
}
