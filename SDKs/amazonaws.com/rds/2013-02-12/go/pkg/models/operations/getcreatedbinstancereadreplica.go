package operations

type GetCreateDbInstanceReadReplicaActionEnum string

const (
	GetCreateDbInstanceReadReplicaActionEnumCreateDbInstanceReadReplica GetCreateDbInstanceReadReplicaActionEnum = "CreateDBInstanceReadReplica"
)

type GetCreateDbInstanceReadReplicaVersionEnum string

const (
	GetCreateDbInstanceReadReplicaVersionEnumTwoThousandAndThirteen0212 GetCreateDbInstanceReadReplicaVersionEnum = "2013-02-12"
)

type GetCreateDbInstanceReadReplicaQueryParams struct {
	Action                     GetCreateDbInstanceReadReplicaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoMinorVersionUpgrade    *bool                                     `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
	AvailabilityZone           *string                                   `queryParam:"style=form,explode=true,name=AvailabilityZone"`
	DbInstanceClass            *string                                   `queryParam:"style=form,explode=true,name=DBInstanceClass"`
	DbInstanceIdentifier       string                                    `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	Iops                       *int64                                    `queryParam:"style=form,explode=true,name=Iops"`
	OptionGroupName            *string                                   `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Port                       *int64                                    `queryParam:"style=form,explode=true,name=Port"`
	PubliclyAccessible         *bool                                     `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
	SourceDbInstanceIdentifier string                                    `queryParam:"style=form,explode=true,name=SourceDBInstanceIdentifier"`
	Version                    GetCreateDbInstanceReadReplicaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateDbInstanceReadReplicaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateDbInstanceReadReplicaRequest struct {
	QueryParams GetCreateDbInstanceReadReplicaQueryParams
	Headers     GetCreateDbInstanceReadReplicaHeaders
}

type GetCreateDbInstanceReadReplicaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
