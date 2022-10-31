package operations

import (
	"openapi/pkg/models/shared"
)

type PostContainersGroupsNameOrIDUnmaproutePathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersGroupsNameOrIDUnmaprouteHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type PostContainersGroupsNameOrIDUnmaprouteRequest struct {
	PathParams PostContainersGroupsNameOrIDUnmaproutePathParams
	Headers    PostContainersGroupsNameOrIDUnmaprouteHeaders
	Request    shared.Route `request:"mediaType=application/json"`
}

type PostContainersGroupsNameOrIDUnmaprouteResponse struct {
	ContainersGroupsNameOrIDMaproutePostInfo *shared.ContainersGroupsNameOrIDMaproutePostInfo
	ContentType                              string
	StatusCode                               int64
}
