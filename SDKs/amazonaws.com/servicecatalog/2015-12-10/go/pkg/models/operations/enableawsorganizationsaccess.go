package operations




type EnableAwsOrganizationsAccessXAmzTargetEnum string

const (
    EnableAwsOrganizationsAccessXAmzTargetEnumAws242ServiceCatalogServiceEnableAwsOrganizationsAccess EnableAwsOrganizationsAccessXAmzTargetEnum = "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess"
)


type EnableAwsOrganizationsAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget EnableAwsOrganizationsAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type EnableAwsOrganizationsAccessRequest struct {
    Headers EnableAwsOrganizationsAccessHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type EnableAwsOrganizationsAccessResponse struct {
    ContentType string 
    EnableAwsOrganizationsAccessOutput map[string]interface{} 
    InvalidStateException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

