package operations

import (
	"time"
)

type GetModifyClusterMaintenanceActionEnum string

const (
	GetModifyClusterMaintenanceActionEnumModifyClusterMaintenance GetModifyClusterMaintenanceActionEnum = "ModifyClusterMaintenance"
)

type GetModifyClusterMaintenanceVersionEnum string

const (
	GetModifyClusterMaintenanceVersionEnumTwoThousandAndTwelve1201 GetModifyClusterMaintenanceVersionEnum = "2012-12-01"
)

type GetModifyClusterMaintenanceQueryParams struct {
	Action                     GetModifyClusterMaintenanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier          string                                 `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DeferMaintenance           *bool                                  `queryParam:"style=form,explode=true,name=DeferMaintenance"`
	DeferMaintenanceDuration   *int64                                 `queryParam:"style=form,explode=true,name=DeferMaintenanceDuration"`
	DeferMaintenanceEndTime    *time.Time                             `queryParam:"style=form,explode=true,name=DeferMaintenanceEndTime"`
	DeferMaintenanceIdentifier *string                                `queryParam:"style=form,explode=true,name=DeferMaintenanceIdentifier"`
	DeferMaintenanceStartTime  *time.Time                             `queryParam:"style=form,explode=true,name=DeferMaintenanceStartTime"`
	Version                    GetModifyClusterMaintenanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyClusterMaintenanceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyClusterMaintenanceRequest struct {
	QueryParams GetModifyClusterMaintenanceQueryParams
	Headers     GetModifyClusterMaintenanceHeaders
}

type GetModifyClusterMaintenanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
