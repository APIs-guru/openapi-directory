package operations

import (
	"openapi/pkg/models/shared"
)

type GetBehaviorsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetBehaviorsIDRequest struct {
	PathParams GetBehaviorsIDPathParams
}

type GetBehaviorsIDResponse struct {
	BehaviorEntity *shared.BehaviorEntity
	ContentType    string
	StatusCode     int64
}
