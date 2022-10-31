package operations

type AssociateServiceQuotaTemplateXAmzTargetEnum string

const (
	AssociateServiceQuotaTemplateXAmzTargetEnumServiceQuotasV20190624AssociateServiceQuotaTemplate AssociateServiceQuotaTemplateXAmzTargetEnum = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate"
)

type AssociateServiceQuotaTemplateHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateServiceQuotaTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateServiceQuotaTemplateRequest struct {
	Headers AssociateServiceQuotaTemplateHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type AssociateServiceQuotaTemplateResponse struct {
	AwsServiceAccessNotEnabledException       *interface{}
	AccessDeniedException                     *interface{}
	AssociateServiceQuotaTemplateResponse     map[string]interface{}
	ContentType                               string
	DependencyAccessDeniedException           *interface{}
	NoAvailableOrganizationException          *interface{}
	OrganizationNotInAllFeaturesModeException *interface{}
	ServiceException                          *interface{}
	StatusCode                                int64
	TemplatesNotAvailableInRegionException    *interface{}
	TooManyRequestsException                  *interface{}
}
