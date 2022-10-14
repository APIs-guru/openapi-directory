package shared

type EstimationChangeStatusAPIModelStatusEnum string

const (
	EstimationChangeStatusAPIModelStatusEnumDraft    EstimationChangeStatusAPIModelStatusEnum = "Draft"
	EstimationChangeStatusAPIModelStatusEnumAccepted EstimationChangeStatusAPIModelStatusEnum = "Accepted"
	EstimationChangeStatusAPIModelStatusEnumRejected EstimationChangeStatusAPIModelStatusEnum = "Rejected"
)

type EstimationChangeStatusAPIModel struct {
	ID     *int32                                    `json:"Id,omitempty" form:"name=Id"`
	Status *EstimationChangeStatusAPIModelStatusEnum `json:"Status,omitempty" form:"name=Status"`
}
