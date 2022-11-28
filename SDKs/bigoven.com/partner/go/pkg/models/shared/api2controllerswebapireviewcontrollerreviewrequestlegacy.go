package shared

// Api2ControllersWebAPIReviewControllerReviewRequestLegacy
// Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development
type Api2ControllersWebAPIReviewControllerReviewRequestLegacy struct {
	ActiveMinutes *int32  `json:"ActiveMinutes,omitempty" form:"name=ActiveMinutes"`
	Comment       *string `json:"Comment,omitempty" form:"name=Comment"`
	GUID          *string `json:"GUID,omitempty" form:"name=GUID"`
	MakeAgain     *string `json:"MakeAgain,omitempty" form:"name=MakeAgain"`
	ParentID      *int32  `json:"ParentID,omitempty" form:"name=ParentID"`
	StarRating    *int32  `json:"StarRating,omitempty" form:"name=StarRating"`
	TotalMinutes  *int32  `json:"TotalMinutes,omitempty" form:"name=TotalMinutes"`
}
