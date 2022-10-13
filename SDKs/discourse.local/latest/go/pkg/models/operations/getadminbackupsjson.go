package operations

type GetAdminBackupsJSON200ApplicationJSON struct {
	Filename     string `json:"filename"`
	LastModified string `json:"last_modified"`
	Size         int64  `json:"size"`
}

type GetAdminBackupsJSONResponse struct {
	ContentType                                  string
	GetAdminBackupsJSON200ApplicationJSONObjects []GetAdminBackupsJSON200ApplicationJSON
	StatusCode                                   int64
}
