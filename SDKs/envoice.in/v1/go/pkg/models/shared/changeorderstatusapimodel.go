package shared

type ChangeOrderStatusAPIModelStatusEnum string

const (
	ChangeOrderStatusAPIModelStatusEnumPendingPayment ChangeOrderStatusAPIModelStatusEnum = "PendingPayment"
	ChangeOrderStatusAPIModelStatusEnumProcessing     ChangeOrderStatusAPIModelStatusEnum = "Processing"
	ChangeOrderStatusAPIModelStatusEnumShipped        ChangeOrderStatusAPIModelStatusEnum = "Shipped"
	ChangeOrderStatusAPIModelStatusEnumCompleted      ChangeOrderStatusAPIModelStatusEnum = "Completed"
	ChangeOrderStatusAPIModelStatusEnumOnHold         ChangeOrderStatusAPIModelStatusEnum = "OnHold"
	ChangeOrderStatusAPIModelStatusEnumCancelled      ChangeOrderStatusAPIModelStatusEnum = "Cancelled"
	ChangeOrderStatusAPIModelStatusEnumRefunded       ChangeOrderStatusAPIModelStatusEnum = "Refunded"
	ChangeOrderStatusAPIModelStatusEnumFailed         ChangeOrderStatusAPIModelStatusEnum = "Failed"
)

type ChangeOrderStatusAPIModel struct {
	ID     *int32                               `json:"Id,omitempty" form:"name=Id"`
	Reason *string                              `json:"Reason,omitempty" form:"name=Reason"`
	Status *ChangeOrderStatusAPIModelStatusEnum `json:"Status,omitempty" form:"name=Status"`
}
