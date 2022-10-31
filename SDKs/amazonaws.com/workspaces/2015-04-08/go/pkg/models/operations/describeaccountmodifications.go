package operations

import (
"openapi/pkg/models/shared")


type DescribeAccountModificationsXAmzTargetEnum string

const (
    DescribeAccountModificationsXAmzTargetEnumWorkspacesServiceDescribeAccountModifications DescribeAccountModificationsXAmzTargetEnum = "WorkspacesService.DescribeAccountModifications"
)


type DescribeAccountModificationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAccountModificationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAccountModificationsRequest struct {
    Headers DescribeAccountModificationsHeaders 
    Request shared.DescribeAccountModificationsRequest `request:"mediaType=application/json"`
    
}

type DescribeAccountModificationsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeAccountModificationsResult *shared.DescribeAccountModificationsResult 
    StatusCode int64 
    
}

