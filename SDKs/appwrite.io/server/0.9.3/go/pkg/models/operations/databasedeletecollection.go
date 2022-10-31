package operations

import (
	"openapi/pkg/models/shared"
)

type DatabaseDeleteCollectionPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
}

type DatabaseDeleteCollectionSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type DatabaseDeleteCollectionRequest struct {
	PathParams DatabaseDeleteCollectionPathParams
	Security   DatabaseDeleteCollectionSecurity
}

type DatabaseDeleteCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
