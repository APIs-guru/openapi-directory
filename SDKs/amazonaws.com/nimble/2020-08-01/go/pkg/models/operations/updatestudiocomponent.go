package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStudioComponentPathParams struct {
	StudioComponentID string `pathParam:"style=simple,explode=false,name=studioComponentId"`
	StudioID          string `pathParam:"style=simple,explode=false,name=studioId"`
}

type UpdateStudioComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateStudioComponentRequestBodyConfiguration struct {
	ActiveDirectoryConfiguration  *shared.ActiveDirectoryConfiguration  `json:"activeDirectoryConfiguration"`
	ComputeFarmConfiguration      *shared.ComputeFarmConfiguration      `json:"computeFarmConfiguration"`
	LicenseServiceConfiguration   *shared.LicenseServiceConfiguration   `json:"licenseServiceConfiguration"`
	SharedFileSystemConfiguration *shared.SharedFileSystemConfiguration `json:"sharedFileSystemConfiguration"`
}

type UpdateStudioComponentRequestBodySubtypeEnum string

const (
	UpdateStudioComponentRequestBodySubtypeEnumAwsManagedMicrosoftAd UpdateStudioComponentRequestBodySubtypeEnum = "AWS_MANAGED_MICROSOFT_AD"
	UpdateStudioComponentRequestBodySubtypeEnumAmazonFsxForWindows   UpdateStudioComponentRequestBodySubtypeEnum = "AMAZON_FSX_FOR_WINDOWS"
	UpdateStudioComponentRequestBodySubtypeEnumAmazonFsxForLustre    UpdateStudioComponentRequestBodySubtypeEnum = "AMAZON_FSX_FOR_LUSTRE"
	UpdateStudioComponentRequestBodySubtypeEnumCustom                UpdateStudioComponentRequestBodySubtypeEnum = "CUSTOM"
)

type UpdateStudioComponentRequestBodyTypeEnum string

const (
	UpdateStudioComponentRequestBodyTypeEnumActiveDirectory  UpdateStudioComponentRequestBodyTypeEnum = "ACTIVE_DIRECTORY"
	UpdateStudioComponentRequestBodyTypeEnumSharedFileSystem UpdateStudioComponentRequestBodyTypeEnum = "SHARED_FILE_SYSTEM"
	UpdateStudioComponentRequestBodyTypeEnumComputeFarm      UpdateStudioComponentRequestBodyTypeEnum = "COMPUTE_FARM"
	UpdateStudioComponentRequestBodyTypeEnumLicenseService   UpdateStudioComponentRequestBodyTypeEnum = "LICENSE_SERVICE"
	UpdateStudioComponentRequestBodyTypeEnumCustom           UpdateStudioComponentRequestBodyTypeEnum = "CUSTOM"
)

type UpdateStudioComponentRequestBody struct {
	Configuration         *UpdateStudioComponentRequestBodyConfiguration `json:"configuration"`
	Description           *string                                        `json:"description"`
	Ec2SecurityGroupIds   []string                                       `json:"ec2SecurityGroupIds"`
	InitializationScripts []shared.StudioComponentInitializationScript   `json:"initializationScripts"`
	Name                  *string                                        `json:"name"`
	ScriptParameters      []shared.ScriptParameterKeyValue               `json:"scriptParameters"`
	Subtype               *UpdateStudioComponentRequestBodySubtypeEnum   `json:"subtype"`
	Type                  *UpdateStudioComponentRequestBodyTypeEnum      `json:"type"`
}

type UpdateStudioComponentRequest struct {
	PathParams UpdateStudioComponentPathParams
	Headers    UpdateStudioComponentHeaders
	Request    UpdateStudioComponentRequestBody `request:"mediaType=application/json"`
}

type UpdateStudioComponentResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateStudioComponentResponse *shared.UpdateStudioComponentResponse
	ValidationException           *interface{}
}
