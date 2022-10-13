package operations

type DeleteSitePathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=SiteId"`
}

type DeleteSiteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSiteRequest struct {
	PathParams DeleteSitePathParams
	Headers    DeleteSiteHeaders
}

type DeleteSiteResponse struct {
	AccessDeniedException   *interface{}
	ConflictException       *interface{}
	ContentType             string
	DeleteSiteOutput        map[string]interface{}
	InternalServerException *interface{}
	NotFoundException       *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
