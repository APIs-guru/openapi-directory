package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStudioComponentPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type CreateStudioComponentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateStudioComponentRequestBodyConfiguration struct {
	ActiveDirectoryConfiguration  *shared.ActiveDirectoryConfiguration  `json:"activeDirectoryConfiguration,omitempty"`
	ComputeFarmConfiguration      *shared.ComputeFarmConfiguration      `json:"computeFarmConfiguration,omitempty"`
	LicenseServiceConfiguration   *shared.LicenseServiceConfiguration   `json:"licenseServiceConfiguration,omitempty"`
	SharedFileSystemConfiguration *shared.SharedFileSystemConfiguration `json:"sharedFileSystemConfiguration,omitempty"`
}

type CreateStudioComponentRequestBodySubtypeEnum string

const (
	CreateStudioComponentRequestBodySubtypeEnumAwsManagedMicrosoftAd CreateStudioComponentRequestBodySubtypeEnum = "AWS_MANAGED_MICROSOFT_AD"
	CreateStudioComponentRequestBodySubtypeEnumAmazonFsxForWindows   CreateStudioComponentRequestBodySubtypeEnum = "AMAZON_FSX_FOR_WINDOWS"
	CreateStudioComponentRequestBodySubtypeEnumAmazonFsxForLustre    CreateStudioComponentRequestBodySubtypeEnum = "AMAZON_FSX_FOR_LUSTRE"
	CreateStudioComponentRequestBodySubtypeEnumCustom                CreateStudioComponentRequestBodySubtypeEnum = "CUSTOM"
)

type CreateStudioComponentRequestBodyTypeEnum string

const (
	CreateStudioComponentRequestBodyTypeEnumActiveDirectory  CreateStudioComponentRequestBodyTypeEnum = "ACTIVE_DIRECTORY"
	CreateStudioComponentRequestBodyTypeEnumSharedFileSystem CreateStudioComponentRequestBodyTypeEnum = "SHARED_FILE_SYSTEM"
	CreateStudioComponentRequestBodyTypeEnumComputeFarm      CreateStudioComponentRequestBodyTypeEnum = "COMPUTE_FARM"
	CreateStudioComponentRequestBodyTypeEnumLicenseService   CreateStudioComponentRequestBodyTypeEnum = "LICENSE_SERVICE"
	CreateStudioComponentRequestBodyTypeEnumCustom           CreateStudioComponentRequestBodyTypeEnum = "CUSTOM"
)

type CreateStudioComponentRequestBody struct {
	Configuration         *CreateStudioComponentRequestBodyConfiguration `json:"configuration,omitempty"`
	Description           *string                                        `json:"description,omitempty"`
	Ec2SecurityGroupIds   []string                                       `json:"ec2SecurityGroupIds,omitempty"`
	InitializationScripts []shared.StudioComponentInitializationScript   `json:"initializationScripts,omitempty"`
	Name                  string                                         `json:"name"`
	ScriptParameters      []shared.ScriptParameterKeyValue               `json:"scriptParameters,omitempty"`
	Subtype               *CreateStudioComponentRequestBodySubtypeEnum   `json:"subtype,omitempty"`
	Tags                  map[string]string                              `json:"tags,omitempty"`
	Type                  CreateStudioComponentRequestBodyTypeEnum       `json:"type"`
}

type CreateStudioComponentRequest struct {
	PathParams CreateStudioComponentPathParams
	Headers    CreateStudioComponentHeaders
	Request    CreateStudioComponentRequestBody `request:"mediaType=application/json"`
}

type CreateStudioComponentResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateStudioComponentResponse *shared.CreateStudioComponentResponse
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
