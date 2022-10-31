package operations




type GetModifyDbSnapshotAttributeActionEnum string

const (
    GetModifyDbSnapshotAttributeActionEnumModifyDbSnapshotAttribute GetModifyDbSnapshotAttributeActionEnum = "ModifyDBSnapshotAttribute"
)



type GetModifyDbSnapshotAttributeVersionEnum string

const (
    GetModifyDbSnapshotAttributeVersionEnumTwoThousandAndFourteen1031 GetModifyDbSnapshotAttributeVersionEnum = "2014-10-31"
)


type GetModifyDbSnapshotAttributeQueryParams struct {
    Action GetModifyDbSnapshotAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AttributeName string `queryParam:"style=form,explode=true,name=AttributeName"`
    DbSnapshotIdentifier string `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
    ValuesToAdd []string `queryParam:"style=form,explode=true,name=ValuesToAdd"`
    ValuesToRemove []string `queryParam:"style=form,explode=true,name=ValuesToRemove"`
    Version GetModifyDbSnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyDbSnapshotAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyDbSnapshotAttributeRequest struct {
    QueryParams GetModifyDbSnapshotAttributeQueryParams 
    Headers GetModifyDbSnapshotAttributeHeaders 
    
}

type GetModifyDbSnapshotAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

