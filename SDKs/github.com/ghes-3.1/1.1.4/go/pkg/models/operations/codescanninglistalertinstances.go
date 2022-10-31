package operations

import (
"openapi/pkg/models/shared")

type CodeScanningListAlertInstancesPathParams struct {
    AlertNumber int64 `pathParam:"style=simple,explode=false,name=alert_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type CodeScanningListAlertInstancesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Ref *string `queryParam:"style=form,explode=true,name=ref"`
    
}

type CodeScanningListAlertInstancesRequest struct {
    PathParams CodeScanningListAlertInstancesPathParams 
    QueryParams CodeScanningListAlertInstancesQueryParams 
    
}

type CodeScanningListAlertInstances503ApplicationJSON struct {
    Code *string `json:"code,omitempty"`
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CodeScanningListAlertInstancesResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    CodeScanningAlertInstances []shared.CodeScanningAlertInstance 
    CodeScanningListAlertInstances503ApplicationJSONObject *CodeScanningListAlertInstances503ApplicationJSON 
    
}

