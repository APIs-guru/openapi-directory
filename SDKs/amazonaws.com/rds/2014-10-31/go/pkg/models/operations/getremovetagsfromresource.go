package operations

type GetRemoveTagsFromResourceActionEnum string

const (
	GetRemoveTagsFromResourceActionEnumRemoveTagsFromResource GetRemoveTagsFromResourceActionEnum = "RemoveTagsFromResource"
)

type GetRemoveTagsFromResourceVersionEnum string

const (
	GetRemoveTagsFromResourceVersionEnumTwoThousandAndFourteen1031 GetRemoveTagsFromResourceVersionEnum = "2014-10-31"
)

type GetRemoveTagsFromResourceQueryParams struct {
	Action       GetRemoveTagsFromResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceName string                               `queryParam:"style=form,explode=true,name=ResourceName"`
	TagKeys      []string                             `queryParam:"style=form,explode=true,name=TagKeys"`
	Version      GetRemoveTagsFromResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRemoveTagsFromResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRemoveTagsFromResourceRequest struct {
	QueryParams GetRemoveTagsFromResourceQueryParams
	Headers     GetRemoveTagsFromResourceHeaders
}

type GetRemoveTagsFromResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
