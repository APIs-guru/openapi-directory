package shared

type Api2ControllersWebAPIReviewControllerReviewRequestLegacy struct {
	ActiveMinutes *int32  `json:"ActiveMinutes" form:"name=ActiveMinutes"`
	Comment       *string `json:"Comment" form:"name=Comment"`
	GUID          *string `json:"GUID" form:"name=GUID"`
	MakeAgain     *string `json:"MakeAgain" form:"name=MakeAgain"`
	ParentID      *int32  `json:"ParentID" form:"name=ParentID"`
	StarRating    *int32  `json:"StarRating" form:"name=StarRating"`
	TotalMinutes  *int32  `json:"TotalMinutes" form:"name=TotalMinutes"`
}
