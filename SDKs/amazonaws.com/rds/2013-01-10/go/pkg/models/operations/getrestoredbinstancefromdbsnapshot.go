package operations

type GetRestoreDbInstanceFromDbSnapshotActionEnum string

const (
	GetRestoreDbInstanceFromDbSnapshotActionEnumRestoreDbInstanceFromDbSnapshot GetRestoreDbInstanceFromDbSnapshotActionEnum = "RestoreDBInstanceFromDBSnapshot"
)

type GetRestoreDbInstanceFromDbSnapshotVersionEnum string

const (
	GetRestoreDbInstanceFromDbSnapshotVersionEnumTwoThousandAndThirteen0110 GetRestoreDbInstanceFromDbSnapshotVersionEnum = "2013-01-10"
)

type GetRestoreDbInstanceFromDbSnapshotQueryParams struct {
	Action                  GetRestoreDbInstanceFromDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoMinorVersionUpgrade *bool                                         `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
	AvailabilityZone        *string                                       `queryParam:"style=form,explode=true,name=AvailabilityZone"`
	DbInstanceClass         *string                                       `queryParam:"style=form,explode=true,name=DBInstanceClass"`
	DbInstanceIdentifier    string                                        `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	DbName                  *string                                       `queryParam:"style=form,explode=true,name=DBName"`
	DbSnapshotIdentifier    string                                        `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	DbSubnetGroupName       *string                                       `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
	Engine                  *string                                       `queryParam:"style=form,explode=true,name=Engine"`
	Iops                    *int64                                        `queryParam:"style=form,explode=true,name=Iops"`
	LicenseModel            *string                                       `queryParam:"style=form,explode=true,name=LicenseModel"`
	MultiAz                 *bool                                         `queryParam:"style=form,explode=true,name=MultiAZ"`
	OptionGroupName         *string                                       `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Port                    *int64                                        `queryParam:"style=form,explode=true,name=Port"`
	PubliclyAccessible      *bool                                         `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
	Version                 GetRestoreDbInstanceFromDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRestoreDbInstanceFromDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRestoreDbInstanceFromDbSnapshotRequest struct {
	QueryParams GetRestoreDbInstanceFromDbSnapshotQueryParams
	Headers     GetRestoreDbInstanceFromDbSnapshotHeaders
}

type GetRestoreDbInstanceFromDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
