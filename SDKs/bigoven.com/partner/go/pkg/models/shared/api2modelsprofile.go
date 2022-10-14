package shared

type Api2ModelsProfile struct {
	AboutMe       *string           `json:"AboutMe,omitempty" form:"name=AboutMe"`
	BackgroundURL *string           `json:"BackgroundUrl,omitempty" form:"name=BackgroundUrl"`
	Counts        *Api2ModelsCounts `json:"Counts,omitempty" form:"name=Counts"`
	FirstName     *string           `json:"FirstName,omitempty" form:"name=FirstName"`
	FullName      *string           `json:"FullName,omitempty" form:"name=FullName"`
	HomeURL       *string           `json:"HomeUrl,omitempty" form:"name=HomeUrl"`
	LastName      *string           `json:"LastName,omitempty" form:"name=LastName"`
	PhotoURL      *string           `json:"PhotoUrl,omitempty" form:"name=PhotoUrl"`
	UserID        *int64            `json:"UserID,omitempty" form:"name=UserID"`
	UserName      *string           `json:"UserName,omitempty" form:"name=UserName"`
}
