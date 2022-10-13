package shared

type UpdateModel struct {
	Added           *string `json:"added"`
	AddedDownload   *string `json:"added_download"`
	Date            *string `json:"date"`
	Deleted         *string `json:"deleted"`
	DeletedDownload *string `json:"deleted_download"`
}
