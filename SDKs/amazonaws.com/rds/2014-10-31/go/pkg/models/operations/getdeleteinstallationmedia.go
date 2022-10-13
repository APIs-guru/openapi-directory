package operations

type GetDeleteInstallationMediaActionEnum string

const (
	GetDeleteInstallationMediaActionEnumDeleteInstallationMedia GetDeleteInstallationMediaActionEnum = "DeleteInstallationMedia"
)

type GetDeleteInstallationMediaVersionEnum string

const (
	GetDeleteInstallationMediaVersionEnumTwoThousandAndFourteen1031 GetDeleteInstallationMediaVersionEnum = "2014-10-31"
)

type GetDeleteInstallationMediaQueryParams struct {
	Action              GetDeleteInstallationMediaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	InstallationMediaID string                                `queryParam:"style=form,explode=true,name=InstallationMediaId"`
	Version             GetDeleteInstallationMediaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteInstallationMediaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteInstallationMediaRequest struct {
	QueryParams GetDeleteInstallationMediaQueryParams
	Headers     GetDeleteInstallationMediaHeaders
}

type GetDeleteInstallationMediaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
