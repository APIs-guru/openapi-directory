package operations

import (
"openapi/pkg/models/shared")


type DescribeDeviceFleetXAmzTargetEnum string

const (
    DescribeDeviceFleetXAmzTargetEnumSageMakerDescribeDeviceFleet DescribeDeviceFleetXAmzTargetEnum = "SageMaker.DescribeDeviceFleet"
)


type DescribeDeviceFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDeviceFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDeviceFleetRequest struct {
    Headers DescribeDeviceFleetHeaders 
    Request shared.DescribeDeviceFleetRequest `request:"mediaType=application/json"`
    
}

type DescribeDeviceFleetResponse struct {
    ContentType string 
    DescribeDeviceFleetResponse *shared.DescribeDeviceFleetResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

