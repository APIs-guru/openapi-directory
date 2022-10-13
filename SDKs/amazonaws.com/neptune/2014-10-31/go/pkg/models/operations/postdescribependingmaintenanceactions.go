package operations

type PostDescribePendingMaintenanceActionsActionEnum string

const (
	PostDescribePendingMaintenanceActionsActionEnumDescribePendingMaintenanceActions PostDescribePendingMaintenanceActionsActionEnum = "DescribePendingMaintenanceActions"
)

type PostDescribePendingMaintenanceActionsVersionEnum string

const (
	PostDescribePendingMaintenanceActionsVersionEnumTwoThousandAndFourteen1031 PostDescribePendingMaintenanceActionsVersionEnum = "2014-10-31"
)

type PostDescribePendingMaintenanceActionsQueryParams struct {
	Action     PostDescribePendingMaintenanceActionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                          `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribePendingMaintenanceActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribePendingMaintenanceActionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribePendingMaintenanceActionsRequest struct {
	QueryParams PostDescribePendingMaintenanceActionsQueryParams
	Headers     PostDescribePendingMaintenanceActionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribePendingMaintenanceActionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
