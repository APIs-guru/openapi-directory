package shared

type PlayersUploadLogoPayloadFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PlayersUploadLogoPayload struct {
	File PlayersUploadLogoPayloadFile `multipartForm:"file"`
	Link string                       `multipartForm:"name=link"`
}
