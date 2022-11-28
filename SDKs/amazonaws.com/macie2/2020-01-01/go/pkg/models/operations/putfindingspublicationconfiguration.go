package operations

type PutFindingsPublicationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration
// Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
type PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration struct {
	PublishClassificationFindings *bool `json:"publishClassificationFindings,omitempty"`
	PublishPolicyFindings         *bool `json:"publishPolicyFindings,omitempty"`
}

type PutFindingsPublicationConfigurationRequestBody struct {
	ClientToken              *string                                                                 `json:"clientToken,omitempty"`
	SecurityHubConfiguration *PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration `json:"securityHubConfiguration,omitempty"`
}

type PutFindingsPublicationConfigurationRequest struct {
	Headers PutFindingsPublicationConfigurationHeaders
	Request PutFindingsPublicationConfigurationRequestBody `request:"mediaType=application/json"`
}

type PutFindingsPublicationConfigurationResponse struct {
	AccessDeniedException                       *interface{}
	ConflictException                           *interface{}
	ContentType                                 string
	InternalServerException                     *interface{}
	PutFindingsPublicationConfigurationResponse map[string]interface{}
	ResourceNotFoundException                   *interface{}
	ServiceQuotaExceededException               *interface{}
	StatusCode                                  int64
	ThrottlingException                         *interface{}
	ValidationException                         *interface{}
}
