package operations

type DisableAwsOrganizationsAccessXAmzTargetEnum string

const (
	DisableAwsOrganizationsAccessXAmzTargetEnumAws242ServiceCatalogServiceDisableAwsOrganizationsAccess DisableAwsOrganizationsAccessXAmzTargetEnum = "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess"
)

type DisableAwsOrganizationsAccessHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableAwsOrganizationsAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisableAwsOrganizationsAccessRequest struct {
	Headers DisableAwsOrganizationsAccessHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DisableAwsOrganizationsAccessResponse struct {
	ContentType                         string
	DisableAwsOrganizationsAccessOutput map[string]interface{}
	InvalidStateException               *interface{}
	OperationNotSupportedException      *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
}
