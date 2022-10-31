package operations

import (
	"time"
)

type GetBacktrackDbClusterActionEnum string

const (
	GetBacktrackDbClusterActionEnumBacktrackDbCluster GetBacktrackDbClusterActionEnum = "BacktrackDBCluster"
)

type GetBacktrackDbClusterVersionEnum string

const (
	GetBacktrackDbClusterVersionEnumTwoThousandAndFourteen1031 GetBacktrackDbClusterVersionEnum = "2014-10-31"
)

type GetBacktrackDbClusterQueryParams struct {
	Action                                  GetBacktrackDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	BacktrackTo                             time.Time                        `queryParam:"style=form,explode=true,name=BacktrackTo"`
	DbClusterIdentifier                     string                           `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	Force                                   *bool                            `queryParam:"style=form,explode=true,name=Force"`
	UseEarliestTimeOnPointInTimeUnavailable *bool                            `queryParam:"style=form,explode=true,name=UseEarliestTimeOnPointInTimeUnavailable"`
	Version                                 GetBacktrackDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetBacktrackDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBacktrackDbClusterRequest struct {
	QueryParams GetBacktrackDbClusterQueryParams
	Headers     GetBacktrackDbClusterHeaders
}

type GetBacktrackDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
