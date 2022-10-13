package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStudioComponentPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type CreateStudioComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStudioComponentRequestBodyConfiguration struct {
	ActiveDirectoryConfiguration  *shared.ActiveDirectoryConfiguration  `json:"activeDirectoryConfiguration"`
	ComputeFarmConfiguration      *shared.ComputeFarmConfiguration      `json:"computeFarmConfiguration"`
	LicenseServiceConfiguration   *shared.LicenseServiceConfiguration   `json:"licenseServiceConfiguration"`
	SharedFileSystemConfiguration *shared.SharedFileSystemConfiguration `json:"sharedFileSystemConfiguration"`
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
	Configuration         *CreateStudioComponentRequestBodyConfiguration `json:"configuration"`
	Description           *string                                        `json:"description"`
	Ec2SecurityGroupIds   []string                                       `json:"ec2SecurityGroupIds"`
	InitializationScripts []shared.StudioComponentInitializationScript   `json:"initializationScripts"`
	Name                  string                                         `json:"name"`
	ScriptParameters      []shared.ScriptParameterKeyValue               `json:"scriptParameters"`
	Subtype               *CreateStudioComponentRequestBodySubtypeEnum   `json:"subtype"`
	Tags                  map[string]string                              `json:"tags"`
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
