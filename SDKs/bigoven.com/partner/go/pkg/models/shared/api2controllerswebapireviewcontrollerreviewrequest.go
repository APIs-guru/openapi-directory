package shared



type Api2ControllersWebAPIReviewControllerReviewRequest struct {
    ActiveMinutes *int32 `json:"ActiveMinutes,omitempty" form:"name=ActiveMinutes"`
    Comment *string `json:"Comment,omitempty" form:"name=Comment"`
    MakeAgain *string `json:"MakeAgain,omitempty" form:"name=MakeAgain"`
    StarRating *int32 `json:"StarRating,omitempty" form:"name=StarRating"`
    TotalMinutes *int32 `json:"TotalMinutes,omitempty" form:"name=TotalMinutes"`
    
}

