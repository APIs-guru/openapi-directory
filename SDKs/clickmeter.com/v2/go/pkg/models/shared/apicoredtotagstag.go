package shared

type APICoreDtoTagsTag struct {
	Datapoints []int64 `json:"datapoints" form:"name=datapoints"`
	Groups     []int64 `json:"groups" form:"name=groups"`
	ID         *int64  `json:"id" form:"name=id"`
	Name       *string `json:"name" form:"name=name"`
}
