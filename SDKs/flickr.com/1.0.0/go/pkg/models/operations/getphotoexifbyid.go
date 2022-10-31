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
	Content *string `json:"_content,omitempty"`
}

type GetPhotoExifByID200ApplicationJSONPhotoExif struct {
	Label      *string                                         `json:"label,omitempty"`
	Raw        *GetPhotoExifByID200ApplicationJSONPhotoExifRaw `json:"raw,omitempty"`
	Tag        *string                                         `json:"tag,omitempty"`
	Tagspace   *string                                         `json:"tagspace,omitempty"`
	Tagspaceid *string                                         `json:"tagspaceid,omitempty"`
}

type GetPhotoExifByID200ApplicationJSONPhoto struct {
	Camera *string                                       `json:"camera,omitempty"`
	Exif   []GetPhotoExifByID200ApplicationJSONPhotoExif `json:"exif,omitempty"`
	Farm   *string                                       `json:"farm,omitempty"`
	ID     *string                                       `json:"id,omitempty"`
	Secret *string                                       `json:"secret,omitempty"`
	Server *string                                       `json:"server,omitempty"`
}

type GetPhotoExifByID200ApplicationJSON struct {
	Photo *GetPhotoExifByID200ApplicationJSONPhoto `json:"photo,omitempty"`
	Stat  *string                                  `json:"stat,omitempty"`
}

type GetPhotoExifByIDResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetPhotoExifByID200ApplicationJSONObject *GetPhotoExifByID200ApplicationJSON
}
