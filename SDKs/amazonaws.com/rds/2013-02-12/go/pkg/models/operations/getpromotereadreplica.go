package operations

type GetPromoteReadReplicaActionEnum string

const (
	GetPromoteReadReplicaActionEnumPromoteReadReplica GetPromoteReadReplicaActionEnum = "PromoteReadReplica"
)

type GetPromoteReadReplicaVersionEnum string

const (
	GetPromoteReadReplicaVersionEnumTwoThousandAndThirteen0212 GetPromoteReadReplicaVersionEnum = "2013-02-12"
)

type GetPromoteReadReplicaQueryParams struct {
	Action                GetPromoteReadReplicaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	BackupRetentionPeriod *int64                           `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
	DbInstanceIdentifier  string                           `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	PreferredBackupWindow *string                          `queryParam:"style=form,explode=true,name=PreferredBackupWindow"`
	Version               GetPromoteReadReplicaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPromoteReadReplicaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPromoteReadReplicaRequest struct {
	QueryParams GetPromoteReadReplicaQueryParams
	Headers     GetPromoteReadReplicaHeaders
}

type GetPromoteReadReplicaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
