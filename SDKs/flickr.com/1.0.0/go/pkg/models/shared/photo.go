package shared

type PhotoComments struct {
	Content *string `json:"_content"`
}

type PhotoDates struct {
	Lastupdate       *string `json:"lastupdate"`
	Posted           *string `json:"posted"`
	Taken            *string `json:"taken"`
	Takengranularity *string `json:"takengranularity"`
	Takenunknown     *bool   `json:"takenunknown"`
}

type PhotoDescription struct {
	Content *string `json:"_content"`
}

type PhotoEditability struct {
	Canaddmeta *bool `json:"canaddmeta"`
	Cancomment *bool `json:"cancomment"`
}

type PhotoNotes struct {
	Note []Note `json:"note"`
}

type PhotoPeople struct {
	Haspeople *bool `json:"haspeople"`
}

type PhotoPermissions struct {
	Permaddmeta *string `json:"permaddmeta"`
	Permcomment *string `json:"permcomment"`
}

type PhotoPubliceditability struct {
	Canaddmeta *bool `json:"canaddmeta"`
	Cancomment *bool `json:"cancomment"`
}

type PhotoTags struct {
	Tag []Tag `json:"tag"`
}

type PhotoTitle struct {
	Content *string `json:"_content"`
}

type PhotoUrls struct {
	URL []URL `json:"url"`
}

type PhotoUsage struct {
	Canblog     *bool `json:"canblog"`
	Candownload *bool `json:"candownload"`
	Canprint    *bool `json:"canprint"`
	Canshare    *bool `json:"canshare"`
}

type PhotoVisibility struct {
	Isfamily *bool `json:"isfamily"`
	Isfriend *bool `json:"isfriend"`
	Ispublic *bool `json:"ispublic"`
}

type Photo struct {
	Comments          *PhotoComments          `json:"comments"`
	Dates             *PhotoDates             `json:"dates"`
	Dateuploaded      *string                 `json:"dateuploaded"`
	Description       *PhotoDescription       `json:"description"`
	Editability       *PhotoEditability       `json:"editability"`
	Farm              *string                 `json:"farm"`
	ID                *string                 `json:"id"`
	Isfavorite        *bool                   `json:"isfavorite"`
	License           *string                 `json:"license"`
	Media             *string                 `json:"media"`
	Notes             *PhotoNotes             `json:"notes"`
	Originalsecret    *string                 `json:"originalsecret"`
	Owner             *Owner                  `json:"owner"`
	People            *PhotoPeople            `json:"people"`
	Permissions       *PhotoPermissions       `json:"permissions"`
	Publiceditability *PhotoPubliceditability `json:"publiceditability"`
	Rotation          *string                 `json:"rotation"`
	Safe              *bool                   `json:"safe"`
	SafetyLevel       *string                 `json:"safety_level"`
	Secret            *string                 `json:"secret"`
	Server            *string                 `json:"server"`
	Tags              *PhotoTags              `json:"tags"`
	Title             *PhotoTitle             `json:"title"`
	Urls              *PhotoUrls              `json:"urls"`
	Usage             *PhotoUsage             `json:"usage"`
	Views             *string                 `json:"views"`
	Visibility        *PhotoVisibility        `json:"visibility"`
}
