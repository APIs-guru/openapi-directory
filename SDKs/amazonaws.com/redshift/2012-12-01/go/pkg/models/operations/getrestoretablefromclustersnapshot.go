package operations

type GetRestoreTableFromClusterSnapshotActionEnum string

const (
	GetRestoreTableFromClusterSnapshotActionEnumRestoreTableFromClusterSnapshot GetRestoreTableFromClusterSnapshotActionEnum = "RestoreTableFromClusterSnapshot"
)

type GetRestoreTableFromClusterSnapshotVersionEnum string

const (
	GetRestoreTableFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201 GetRestoreTableFromClusterSnapshotVersionEnum = "2012-12-01"
)

type GetRestoreTableFromClusterSnapshotQueryParams struct {
	Action                        GetRestoreTableFromClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier             string                                        `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	EnableCaseSensitiveIdentifier *bool                                         `queryParam:"style=form,explode=true,name=EnableCaseSensitiveIdentifier"`
	NewTableName                  string                                        `queryParam:"style=form,explode=true,name=NewTableName"`
	SnapshotIdentifier            string                                        `queryParam:"style=form,explode=true,name=SnapshotIdentifier"`
	SourceDatabaseName            string                                        `queryParam:"style=form,explode=true,name=SourceDatabaseName"`
	SourceSchemaName              *string                                       `queryParam:"style=form,explode=true,name=SourceSchemaName"`
	SourceTableName               string                                        `queryParam:"style=form,explode=true,name=SourceTableName"`
	TargetDatabaseName            *string                                       `queryParam:"style=form,explode=true,name=TargetDatabaseName"`
	TargetSchemaName              *string                                       `queryParam:"style=form,explode=true,name=TargetSchemaName"`
	Version                       GetRestoreTableFromClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRestoreTableFromClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRestoreTableFromClusterSnapshotRequest struct {
	QueryParams GetRestoreTableFromClusterSnapshotQueryParams
	Headers     GetRestoreTableFromClusterSnapshotHeaders
}

type GetRestoreTableFromClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
