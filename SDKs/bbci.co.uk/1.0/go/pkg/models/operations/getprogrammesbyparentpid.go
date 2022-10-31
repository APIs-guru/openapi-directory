package operations

import (
	"openapi/pkg/models/shared"
)

type GetProgrammesByParentPidPathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetProgrammesByParentPidQueryParams struct {
	Availability      shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	InitialChildCount int64                   `queryParam:"style=form,explode=true,name=initial_child_count"`
	Rights            shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetProgrammesByParentPidRequest struct {
	PathParams  GetProgrammesByParentPidPathParams
	QueryParams GetProgrammesByParentPidQueryParams
}

type GetProgrammesByParentPidResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
