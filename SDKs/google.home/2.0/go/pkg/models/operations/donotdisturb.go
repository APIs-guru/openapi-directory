package operations

import (
	"openapi/pkg/models/shared"
)

type DoNotDisturbHeaders struct {
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
}

type DoNotDisturbRequest struct {
	Headers DoNotDisturbHeaders
}

type DoNotDisturbResponse struct {
	ContentType     string
	Getcurrentstate *shared.Getcurrentstate
	StatusCode      int64
}
