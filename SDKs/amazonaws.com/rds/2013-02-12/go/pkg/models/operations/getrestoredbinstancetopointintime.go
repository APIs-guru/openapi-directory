package operations

import (
	"time"
)

type GetRestoreDbInstanceToPointInTimeActionEnum string

const (
	GetRestoreDbInstanceToPointInTimeActionEnumRestoreDbInstanceToPointInTime GetRestoreDbInstanceToPointInTimeActionEnum = "RestoreDBInstanceToPointInTime"
)

type GetRestoreDbInstanceToPointInTimeVersionEnum string

const (
	GetRestoreDbInstanceToPointInTimeVersionEnumTwoThousandAndThirteen0212 GetRestoreDbInstanceToPointInTimeVersionEnum = "2013-02-12"
)

type GetRestoreDbInstanceToPointInTimeQueryParams struct {
	Action                     GetRestoreDbInstanceToPointInTimeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoMinorVersionUpgrade    *bool                                        `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
	AvailabilityZone           *string                                      `queryParam:"style=form,explode=true,name=AvailabilityZone"`
	DbInstanceClass            *string                                      `queryParam:"style=form,explode=true,name=DBInstanceClass"`
	DbName                     *string                                      `queryParam:"style=form,explode=true,name=DBName"`
	DbSubnetGroupName          *string                                      `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
	Engine                     *string                                      `queryParam:"style=form,explode=true,name=Engine"`
	Iops                       *int64                                       `queryParam:"style=form,explode=true,name=Iops"`
	LicenseModel               *string                                      `queryParam:"style=form,explode=true,name=LicenseModel"`
	MultiAz                    *bool                                        `queryParam:"style=form,explode=true,name=MultiAZ"`
	OptionGroupName            *string                                      `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Port                       *int64                                       `queryParam:"style=form,explode=true,name=Port"`
	PubliclyAccessible         *bool                                        `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
	RestoreTime                *time.Time                                   `queryParam:"style=form,explode=true,name=RestoreTime"`
	SourceDbInstanceIdentifier string                                       `queryParam:"style=form,explode=true,name=SourceDBInstanceIdentifier"`
	TargetDbInstanceIdentifier string                                       `queryParam:"style=form,explode=true,name=TargetDBInstanceIdentifier"`
	UseLatestRestorableTime    *bool                                        `queryParam:"style=form,explode=true,name=UseLatestRestorableTime"`
	Version                    GetRestoreDbInstanceToPointInTimeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRestoreDbInstanceToPointInTimeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRestoreDbInstanceToPointInTimeRequest struct {
	QueryParams GetRestoreDbInstanceToPointInTimeQueryParams
	Headers     GetRestoreDbInstanceToPointInTimeHeaders
}

type GetRestoreDbInstanceToPointInTimeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
