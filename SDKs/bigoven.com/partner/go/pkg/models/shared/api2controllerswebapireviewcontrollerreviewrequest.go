package shared

type Api2ControllersWebAPIReviewControllerReviewRequest struct {
	ActiveMinutes *int32  `json:"ActiveMinutes" form:"name=ActiveMinutes"`
	Comment       *string `json:"Comment" form:"name=Comment"`
	MakeAgain     *string `json:"MakeAgain" form:"name=MakeAgain"`
	StarRating    *int32  `json:"StarRating" form:"name=StarRating"`
	TotalMinutes  *int32  `json:"TotalMinutes" form:"name=TotalMinutes"`
}
