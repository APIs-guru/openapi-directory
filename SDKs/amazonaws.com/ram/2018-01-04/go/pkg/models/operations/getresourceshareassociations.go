package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceShareAssociationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetResourceShareAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResourceShareAssociationsRequestBodyAssociationStatusEnum string

const (
	GetResourceShareAssociationsRequestBodyAssociationStatusEnumAssociating    GetResourceShareAssociationsRequestBodyAssociationStatusEnum = "ASSOCIATING"
	GetResourceShareAssociationsRequestBodyAssociationStatusEnumAssociated     GetResourceShareAssociationsRequestBodyAssociationStatusEnum = "ASSOCIATED"
	GetResourceShareAssociationsRequestBodyAssociationStatusEnumFailed         GetResourceShareAssociationsRequestBodyAssociationStatusEnum = "FAILED"
	GetResourceShareAssociationsRequestBodyAssociationStatusEnumDisassociating GetResourceShareAssociationsRequestBodyAssociationStatusEnum = "DISASSOCIATING"
	GetResourceShareAssociationsRequestBodyAssociationStatusEnumDisassociated  GetResourceShareAssociationsRequestBodyAssociationStatusEnum = "DISASSOCIATED"
)

type GetResourceShareAssociationsRequestBodyAssociationTypeEnum string

const (
	GetResourceShareAssociationsRequestBodyAssociationTypeEnumPrincipal GetResourceShareAssociationsRequestBodyAssociationTypeEnum = "PRINCIPAL"
	GetResourceShareAssociationsRequestBodyAssociationTypeEnumResource  GetResourceShareAssociationsRequestBodyAssociationTypeEnum = "RESOURCE"
)

type GetResourceShareAssociationsRequestBody struct {
	AssociationStatus *GetResourceShareAssociationsRequestBodyAssociationStatusEnum `json:"associationStatus"`
	AssociationType   GetResourceShareAssociationsRequestBodyAssociationTypeEnum    `json:"associationType"`
	MaxResults        *int64                                                        `json:"maxResults"`
	NextToken         *string                                                       `json:"nextToken"`
	Principal         *string                                                       `json:"principal"`
	ResourceArn       *string                                                       `json:"resourceArn"`
	ResourceShareArns []string                                                      `json:"resourceShareArns"`
}

type GetResourceShareAssociationsRequest struct {
	QueryParams GetResourceShareAssociationsQueryParams
	Headers     GetResourceShareAssociationsHeaders
	Request     GetResourceShareAssociationsRequestBody `request:"mediaType=application/json"`
}

type GetResourceShareAssociationsResponse struct {
	ContentType                          string
	GetResourceShareAssociationsResponse *shared.GetResourceShareAssociationsResponse
	InvalidNextTokenException            *interface{}
	InvalidParameterException            *interface{}
	MalformedArnException                *interface{}
	OperationNotPermittedException       *interface{}
	ServerInternalException              *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	UnknownResourceException             *interface{}
}
