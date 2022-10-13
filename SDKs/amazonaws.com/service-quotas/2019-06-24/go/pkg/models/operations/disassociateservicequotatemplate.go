package operations

type DisassociateServiceQuotaTemplateXAmzTargetEnum string

const (
	DisassociateServiceQuotaTemplateXAmzTargetEnumServiceQuotasV20190624DisassociateServiceQuotaTemplate DisassociateServiceQuotaTemplateXAmzTargetEnum = "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate"
)

type DisassociateServiceQuotaTemplateHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateServiceQuotaTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateServiceQuotaTemplateRequest struct {
	Headers DisassociateServiceQuotaTemplateHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DisassociateServiceQuotaTemplateResponse struct {
	AwsServiceAccessNotEnabledException      *interface{}
	AccessDeniedException                    *interface{}
	ContentType                              string
	DependencyAccessDeniedException          *interface{}
	DisassociateServiceQuotaTemplateResponse map[string]interface{}
	NoAvailableOrganizationException         *interface{}
	ServiceException                         *interface{}
	ServiceQuotaTemplateNotInUseException    *interface{}
	StatusCode                               int64
	TemplatesNotAvailableInRegionException   *interface{}
	TooManyRequestsException                 *interface{}
}
