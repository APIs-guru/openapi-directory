package operations

type EnableAwsOrganizationsAccessXAmzTargetEnum string

const (
	EnableAwsOrganizationsAccessXAmzTargetEnumAws242ServiceCatalogServiceEnableAwsOrganizationsAccess EnableAwsOrganizationsAccessXAmzTargetEnum = "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess"
)

type EnableAwsOrganizationsAccessHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableAwsOrganizationsAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableAwsOrganizationsAccessRequest struct {
	Headers EnableAwsOrganizationsAccessHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type EnableAwsOrganizationsAccessResponse struct {
	ContentType                        string
	EnableAwsOrganizationsAccessOutput map[string]interface{}
	InvalidStateException              *interface{}
	OperationNotSupportedException     *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
