package shared

import (
	"time"
)

type OrderCustomers struct {
	Emails       []Email       `json:"emails,omitempty"`
	FirstName    *string       `json:"first_name,omitempty"`
	LastName     *string       `json:"last_name,omitempty"`
	MiddleName   *string       `json:"middle_name,omitempty"`
	PhoneNumbers []PhoneNumber `json:"phone_numbers,omitempty"`
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
	Amount    *int64                   `json:"amount,omitempty"`
	Currency  *CurrencyEnum            `json:"currency,omitempty"`
	ID        *string                  `json:"id,omitempty"`
	Name      *string                  `json:"name,omitempty"`
	ProductID *string                  `json:"product_id,omitempty"`
	Scope     *OrderDiscountsScopeEnum `json:"scope,omitempty"`
	Type      *OrderDiscountsTypeEnum  `json:"type,omitempty"`
}

type OrderFulfillmentsPickupDetailsCurbsidePickupDetails struct {
	BuyerArrivedAt  *time.Time `json:"buyer_arrived_at,omitempty"`
	CurbsideDetails *string    `json:"curbside_details,omitempty"`
}

type OrderFulfillmentsPickupDetailsRecipient struct {
	Address     *Address     `json:"address,omitempty"`
	CustomerID  *string      `json:"customer_id,omitempty"`
	DisplayName *string      `json:"display_name,omitempty"`
	Email       *Email       `json:"email,omitempty"`
	PhoneNumber *PhoneNumber `json:"phone_number,omitempty"`
}

type OrderFulfillmentsPickupDetailsScheduleTypeEnum string

const (
	OrderFulfillmentsPickupDetailsScheduleTypeEnumScheduled OrderFulfillmentsPickupDetailsScheduleTypeEnum = "scheduled"
)

type OrderFulfillmentsPickupDetails struct {
	AcceptedAt            *time.Time                                           `json:"accepted_at,omitempty"`
	AutoCompleteDuration  *string                                              `json:"auto_complete_duration,omitempty"`
	CancelReason          *string                                              `json:"cancel_reason,omitempty"`
	CanceledAt            *time.Time                                           `json:"canceled_at,omitempty"`
	CurbsidePickupDetails *OrderFulfillmentsPickupDetailsCurbsidePickupDetails `json:"curbside_pickup_details,omitempty"`
	ExpiredAt             *time.Time                                           `json:"expired_at,omitempty"`
	ExpiresAt             *time.Time                                           `json:"expires_at,omitempty"`
	IsCurbsidePickup      *bool                                                `json:"is_curbside_pickup,omitempty"`
	Note                  *string                                              `json:"note,omitempty"`
	PickedUpAt            *time.Time                                           `json:"picked_up_at,omitempty"`
	PickupAt              *time.Time                                           `json:"pickup_at,omitempty"`
	PickupWindowDuration  *string                                              `json:"pickup_window_duration,omitempty"`
	PlacedAt              *time.Time                                           `json:"placed_at,omitempty"`
	PrepTimeDuration      *string                                              `json:"prep_time_duration,omitempty"`
	ReadyAt               *time.Time                                           `json:"ready_at,omitempty"`
	Recipient             *OrderFulfillmentsPickupDetailsRecipient             `json:"recipient,omitempty"`
	RejectedAt            *time.Time                                           `json:"rejected_at,omitempty"`
	ScheduleType          *OrderFulfillmentsPickupDetailsScheduleTypeEnum      `json:"schedule_type,omitempty"`
}

type OrderFulfillmentsFulfillmentStatusEnum string

const (
	OrderFulfillmentsFulfillmentStatusEnumProposed  OrderFulfillmentsFulfillmentStatusEnum = "proposed"
	OrderFulfillmentsFulfillmentStatusEnumReserved  OrderFulfillmentsFulfillmentStatusEnum = "reserved"
	OrderFulfillmentsFulfillmentStatusEnumPrepared  OrderFulfillmentsFulfillmentStatusEnum = "prepared"
	OrderFulfillmentsFulfillmentStatusEnumCompleted OrderFulfillmentsFulfillmentStatusEnum = "completed"
	OrderFulfillmentsFulfillmentStatusEnumCancelled OrderFulfillmentsFulfillmentStatusEnum = "cancelled"
	OrderFulfillmentsFulfillmentStatusEnumFailed    OrderFulfillmentsFulfillmentStatusEnum = "failed"
	OrderFulfillmentsFulfillmentStatusEnumOther     OrderFulfillmentsFulfillmentStatusEnum = "other"
)

type OrderFulfillmentsTypeEnum string

const (
	OrderFulfillmentsTypeEnumPickup   OrderFulfillmentsTypeEnum = "pickup"
	OrderFulfillmentsTypeEnumShipment OrderFulfillmentsTypeEnum = "shipment"
)

type OrderFulfillments struct {
	ID              *string                                 `json:"id,omitempty"`
	PickupDetails   *OrderFulfillmentsPickupDetails         `json:"pickup_details,omitempty"`
	ShipmentDetails map[string]interface{}                  `json:"shipment_details,omitempty"`
	Status          *OrderFulfillmentsFulfillmentStatusEnum `json:"status,omitempty"`
	Type            *OrderFulfillmentsTypeEnum              `json:"type,omitempty"`
}

type OrderLineItems struct {
	AppliedDiscounts []interface{} `json:"applied_discounts,omitempty"`
	AppliedTaxes     []interface{} `json:"applied_taxes,omitempty"`
	ID               *string       `json:"id,omitempty"`
	Item             *interface{}  `json:"item,omitempty"`
	Modifiers        []interface{} `json:"modifiers,omitempty"`
	Name             *string       `json:"name,omitempty"`
	Quantity         *float64      `json:"quantity,omitempty"`
	TotalAmount      *int64        `json:"total_amount,omitempty"`
	TotalDiscount    *int64        `json:"total_discount,omitempty"`
	TotalTax         *int64        `json:"total_tax,omitempty"`
	UnitPrice        *float64      `json:"unit_price,omitempty"`
}

type OrderPosPaymentStatusEnum string

const (
	OrderPosPaymentStatusEnumOpen              OrderPosPaymentStatusEnum = "open"
	OrderPosPaymentStatusEnumPaid              OrderPosPaymentStatusEnum = "paid"
	OrderPosPaymentStatusEnumRefunded          OrderPosPaymentStatusEnum = "refunded"
	OrderPosPaymentStatusEnumCredited          OrderPosPaymentStatusEnum = "credited"
	OrderPosPaymentStatusEnumPartiallyPaid     OrderPosPaymentStatusEnum = "partially_paid"
	OrderPosPaymentStatusEnumPartiallyRefunded OrderPosPaymentStatusEnum = "partially_refunded"
	OrderPosPaymentStatusEnumUnknown           OrderPosPaymentStatusEnum = "unknown"
)

type OrderPayments struct {
	Amount   *int64        `json:"amount,omitempty"`
	Currency *CurrencyEnum `json:"currency,omitempty"`
	ID       *string       `json:"id,omitempty"`
}

type OrderRefundsStatusEnum string

const (
	OrderRefundsStatusEnumPending  OrderRefundsStatusEnum = "pending"
	OrderRefundsStatusEnumApproved OrderRefundsStatusEnum = "approved"
	OrderRefundsStatusEnumRejected OrderRefundsStatusEnum = "rejected"
	OrderRefundsStatusEnumFailed   OrderRefundsStatusEnum = "failed"
)

type OrderRefunds struct {
	Amount        *int64                  `json:"amount,omitempty"`
	Currency      *CurrencyEnum           `json:"currency,omitempty"`
	ID            *string                 `json:"id,omitempty"`
	LocationID    *string                 `json:"location_id,omitempty"`
	Reason        *string                 `json:"reason,omitempty"`
	Status        *OrderRefundsStatusEnum `json:"status,omitempty"`
	TenderID      *string                 `json:"tender_id,omitempty"`
	TransactionID *string                 `json:"transaction_id,omitempty"`
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

type OrderStatusEnum string

const (
	OrderStatusEnumOpen      OrderStatusEnum = "open"
	OrderStatusEnumDraft     OrderStatusEnum = "draft"
	OrderStatusEnumDelivered OrderStatusEnum = "delivered"
	OrderStatusEnumDelayed   OrderStatusEnum = "delayed"
	OrderStatusEnumVoided    OrderStatusEnum = "voided"
	OrderStatusEnumCompleted OrderStatusEnum = "completed"
	OrderStatusEnumHidden    OrderStatusEnum = "hidden"
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
	Amount                  *float64                         `json:"amount,omitempty"`
	BuyerTenderedCashAmount *int64                           `json:"buyer_tendered_cash_amount,omitempty"`
	Card                    *PaymentCard                     `json:"card,omitempty"`
	CardEntryMethod         *OrderTendersCardEntryMethodEnum `json:"card_entry_method,omitempty"`
	CardStatus              *OrderTendersCardStatusEnum      `json:"card_status,omitempty"`
	ChangeBackCashAmount    *int64                           `json:"change_back_cash_amount,omitempty"`
	Currency                *CurrencyEnum                    `json:"currency,omitempty"`
	ID                      *string                          `json:"id,omitempty"`
	LocationID              *string                          `json:"location_id,omitempty"`
	Name                    *string                          `json:"name,omitempty"`
	Note                    *string                          `json:"note,omitempty"`
	PaymentID               *string                          `json:"payment_id,omitempty"`
	Percentage              *float64                         `json:"percentage,omitempty"`
	TotalAmount             *int64                           `json:"total_amount,omitempty"`
	TotalDiscount           *int64                           `json:"total_discount,omitempty"`
	TotalProcessingFee      *int64                           `json:"total_processing_fee,omitempty"`
	TotalRefund             *int64                           `json:"total_refund,omitempty"`
	TotalServiceCharge      *int64                           `json:"total_service_charge,omitempty"`
	TotalTax                *int64                           `json:"total_tax,omitempty"`
	TotalTip                *int64                           `json:"total_tip,omitempty"`
	TransactionID           *string                          `json:"transaction_id,omitempty"`
	Type                    *OrderTendersTypeEnum            `json:"type,omitempty"`
}

type Order struct {
	ClosedDate         *time.Time                 `json:"closed_date,omitempty"`
	CreatedAt          *time.Time                 `json:"created_at,omitempty"`
	CreatedBy          *string                    `json:"created_by,omitempty"`
	Currency           *CurrencyEnum              `json:"currency,omitempty"`
	CustomerID         *string                    `json:"customer_id,omitempty"`
	Customers          []OrderCustomers           `json:"customers,omitempty"`
	Discounts          []OrderDiscounts           `json:"discounts,omitempty"`
	EmployeeID         *string                    `json:"employee_id,omitempty"`
	Fulfillments       []OrderFulfillments        `json:"fulfillments,omitempty"`
	ID                 *string                    `json:"id,omitempty"`
	IdempotencyKey     *string                    `json:"idempotency_key,omitempty"`
	LineItems          []OrderLineItems           `json:"line_items,omitempty"`
	LocationID         string                     `json:"location_id"`
	MerchantID         string                     `json:"merchant_id"`
	Note               *string                    `json:"note,omitempty"`
	OrderDate          *time.Time                 `json:"order_date,omitempty"`
	OrderNumber        *string                    `json:"order_number,omitempty"`
	OrderTypeID        *string                    `json:"order_type_id,omitempty"`
	PaymentStatus      *OrderPosPaymentStatusEnum `json:"payment_status,omitempty"`
	Payments           []OrderPayments            `json:"payments,omitempty"`
	ReferenceID        *string                    `json:"reference_id,omitempty"`
	Refunded           *bool                      `json:"refunded,omitempty"`
	Refunds            []OrderRefunds             `json:"refunds,omitempty"`
	Seat               *string                    `json:"seat,omitempty"`
	ServiceCharges     []ServiceCharge            `json:"service_charges,omitempty"`
	Source             *OrderSourceEnum           `json:"source,omitempty"`
	Status             *OrderStatusEnum           `json:"status,omitempty"`
	Table              *string                    `json:"table,omitempty"`
	Taxes              []interface{}              `json:"taxes,omitempty"`
	Tenders            []OrderTenders             `json:"tenders,omitempty"`
	Title              *string                    `json:"title,omitempty"`
	TotalAmount        *int64                     `json:"total_amount,omitempty"`
	TotalDiscount      *int64                     `json:"total_discount,omitempty"`
	TotalRefund        *int64                     `json:"total_refund,omitempty"`
	TotalServiceCharge *int64                     `json:"total_service_charge,omitempty"`
	TotalTax           *int64                     `json:"total_tax,omitempty"`
	TotalTip           *int64                     `json:"total_tip,omitempty"`
	UpdatedAt          *time.Time                 `json:"updated_at,omitempty"`
	UpdatedBy          *string                    `json:"updated_by,omitempty"`
	Version            *string                    `json:"version,omitempty"`
	Voided             *bool                      `json:"voided,omitempty"`
	VoidedAt           *time.Time                 `json:"voided_at,omitempty"`
}
