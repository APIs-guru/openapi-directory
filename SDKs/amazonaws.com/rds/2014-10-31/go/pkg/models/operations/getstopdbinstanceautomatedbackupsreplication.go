package operations




type GetStopDbInstanceAutomatedBackupsReplicationActionEnum string

const (
    GetStopDbInstanceAutomatedBackupsReplicationActionEnumStopDbInstanceAutomatedBackupsReplication GetStopDbInstanceAutomatedBackupsReplicationActionEnum = "StopDBInstanceAutomatedBackupsReplication"
)



type GetStopDbInstanceAutomatedBackupsReplicationVersionEnum string

const (
    GetStopDbInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031 GetStopDbInstanceAutomatedBackupsReplicationVersionEnum = "2014-10-31"
)


type GetStopDbInstanceAutomatedBackupsReplicationQueryParams struct {
    Action GetStopDbInstanceAutomatedBackupsReplicationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SourceDbInstanceArn string `queryParam:"style=form,explode=true,name=SourceDBInstanceArn"`
    Version GetStopDbInstanceAutomatedBackupsReplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetStopDbInstanceAutomatedBackupsReplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStopDbInstanceAutomatedBackupsReplicationRequest struct {
    QueryParams GetStopDbInstanceAutomatedBackupsReplicationQueryParams 
    Headers GetStopDbInstanceAutomatedBackupsReplicationHeaders 
    
}

type GetStopDbInstanceAutomatedBackupsReplicationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

