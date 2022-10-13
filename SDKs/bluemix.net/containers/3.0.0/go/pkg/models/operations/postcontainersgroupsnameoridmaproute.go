package operations

import (
	"openapi/pkg/models/shared"
)

type PostContainersGroupsNameOrIDMaproutePathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersGroupsNameOrIDMaprouteHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostContainersGroupsNameOrIDMaprouteRequest struct {
	PathParams PostContainersGroupsNameOrIDMaproutePathParams
	Headers    PostContainersGroupsNameOrIDMaprouteHeaders
	Request    shared.Route `request:"mediaType=application/json"`
}

type PostContainersGroupsNameOrIDMaprouteResponse struct {
	ContainersGroupsNameOrIDMaproutePostInfo *shared.ContainersGroupsNameOrIDMaproutePostInfo
	ContentType                              string
	StatusCode                               int64
}
