package operations

import (
	"openapi/pkg/models/shared"
)

type Destiny2EquipItemsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type Destiny2EquipItemsRequest struct {
	Security Destiny2EquipItemsSecurity
}

type Destiny2EquipItemsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
