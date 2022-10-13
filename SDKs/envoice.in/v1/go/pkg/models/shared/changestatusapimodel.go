package shared

type ChangeStatusAPIModelStatusEnum string

const (
	ChangeStatusAPIModelStatusEnumDraft   ChangeStatusAPIModelStatusEnum = "Draft"
	ChangeStatusAPIModelStatusEnumPaid    ChangeStatusAPIModelStatusEnum = "Paid"
	ChangeStatusAPIModelStatusEnumUnpaid  ChangeStatusAPIModelStatusEnum = "Unpaid"
	ChangeStatusAPIModelStatusEnumOverdue ChangeStatusAPIModelStatusEnum = "Overdue"
	ChangeStatusAPIModelStatusEnumVoid    ChangeStatusAPIModelStatusEnum = "Void"
)

type ChangeStatusAPIModel struct {
	ID     *int32                          `json:"Id" form:"name=Id"`
	Status *ChangeStatusAPIModelStatusEnum `json:"Status" form:"name=Status"`
}
