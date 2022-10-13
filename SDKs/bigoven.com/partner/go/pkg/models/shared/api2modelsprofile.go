package shared

type Api2ModelsProfile struct {
	AboutMe       *string           `json:"AboutMe" form:"name=AboutMe"`
	BackgroundURL *string           `json:"BackgroundUrl" form:"name=BackgroundUrl"`
	Counts        *Api2ModelsCounts `json:"Counts" form:"name=Counts"`
	FirstName     *string           `json:"FirstName" form:"name=FirstName"`
	FullName      *string           `json:"FullName" form:"name=FullName"`
	HomeURL       *string           `json:"HomeUrl" form:"name=HomeUrl"`
	LastName      *string           `json:"LastName" form:"name=LastName"`
	PhotoURL      *string           `json:"PhotoUrl" form:"name=PhotoUrl"`
	UserID        *int64            `json:"UserID" form:"name=UserID"`
	UserName      *string           `json:"UserName" form:"name=UserName"`
}
