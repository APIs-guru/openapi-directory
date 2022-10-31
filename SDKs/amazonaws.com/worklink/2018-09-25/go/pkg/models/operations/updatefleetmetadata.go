package operations

type UpdateFleetMetadataHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateFleetMetadataRequestBody struct {
	DisplayName                *string `json:"DisplayName,omitempty"`
	FleetArn                   string  `json:"FleetArn"`
	OptimizeForEndUserLocation *bool   `json:"OptimizeForEndUserLocation,omitempty"`
}

type UpdateFleetMetadataRequest struct {
	Headers UpdateFleetMetadataHeaders
	Request UpdateFleetMetadataRequestBody `request:"mediaType=application/json"`
}

type UpdateFleetMetadataResponse struct {
	ContentType                  string
	InternalServerErrorException *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
	UpdateFleetMetadataResponse  map[string]interface{}
}
