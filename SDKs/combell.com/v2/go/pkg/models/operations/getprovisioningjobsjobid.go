package operations

import (
	"openapi/pkg/models/shared"
)

type GetProvisioningjobsJobIDPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetProvisioningjobsJobIDQueryParams struct {
	JobID string `queryParam:"style=form,explode=true,name=job_id"`
}

type GetProvisioningjobsJobIDRequest struct {
	PathParams  GetProvisioningjobsJobIDPathParams
	QueryParams GetProvisioningjobsJobIDQueryParams
}

type GetProvisioningjobsJobIDResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProvisioningJobCompletion *shared.ProvisioningJobCompletion
	ProvisioningJobInfo       *shared.ProvisioningJobInfo
	StatusCode                int64
}
