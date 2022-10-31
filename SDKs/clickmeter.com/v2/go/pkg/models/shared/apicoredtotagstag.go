package shared

type APICoreDtoTagsTag struct {
	Datapoints []int64 `json:"datapoints,omitempty" form:"name=datapoints"`
	Groups     []int64 `json:"groups,omitempty" form:"name=groups"`
	ID         *int64  `json:"id,omitempty" form:"name=id"`
	Name       *string `json:"name,omitempty" form:"name=name"`
}
