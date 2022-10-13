package operations

type GetPhotoExifByIDQueryParams struct {
	APIKey  string  `queryParam:"style=form,explode=true,name=api_key"`
	PhotoID string  `queryParam:"style=form,explode=true,name=photo_id"`
	Secret  *string `queryParam:"style=form,explode=true,name=secret"`
}

type GetPhotoExifByIDRequest struct {
	QueryParams GetPhotoExifByIDQueryParams
}

type GetPhotoExifByID200ApplicationJSONPhotoExifRaw struct {
	Content *string `json:"_content"`
}

type GetPhotoExifByID200ApplicationJSONPhotoExif struct {
	Label      *string                                         `json:"label"`
	Raw        *GetPhotoExifByID200ApplicationJSONPhotoExifRaw `json:"raw"`
	Tag        *string                                         `json:"tag"`
	Tagspace   *string                                         `json:"tagspace"`
	Tagspaceid *string                                         `json:"tagspaceid"`
}

type GetPhotoExifByID200ApplicationJSONPhoto struct {
	Camera *string                                       `json:"camera"`
	Exif   []GetPhotoExifByID200ApplicationJSONPhotoExif `json:"exif"`
	Farm   *string                                       `json:"farm"`
	ID     *string                                       `json:"id"`
	Secret *string                                       `json:"secret"`
	Server *string                                       `json:"server"`
}

type GetPhotoExifByID200ApplicationJSON struct {
	Photo *GetPhotoExifByID200ApplicationJSONPhoto `json:"photo"`
	Stat  *string                                  `json:"stat"`
}

type GetPhotoExifByIDResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetPhotoExifByID200ApplicationJSONObject *GetPhotoExifByID200ApplicationJSON
}
