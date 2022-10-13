package operations

import (
	"openapi/pkg/models/shared"
)

type GetDetailsSingleBatchPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type GetDetailsSingleBatchRequest struct {
	PathParams GetDetailsSingleBatchPathParams
}

type GetDetailsSingleBatchResponse struct {
	ContentType                                                                string
	StatusCode                                                                 int64
	OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems *shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems
}
