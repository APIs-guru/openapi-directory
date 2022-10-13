package operations

type GetModifyClusterActionEnum string

const (
	GetModifyClusterActionEnumModifyCluster GetModifyClusterActionEnum = "ModifyCluster"
)

type GetModifyClusterVersionEnum string

const (
	GetModifyClusterVersionEnumTwoThousandAndTwelve1201 GetModifyClusterVersionEnum = "2012-12-01"
)

type GetModifyClusterQueryParams struct {
	Action                           GetModifyClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AllowVersionUpgrade              *bool                       `queryParam:"style=form,explode=true,name=AllowVersionUpgrade"`
	AutomatedSnapshotRetentionPeriod *int64                      `queryParam:"style=form,explode=true,name=AutomatedSnapshotRetentionPeriod"`
	AvailabilityZone                 *string                     `queryParam:"style=form,explode=true,name=AvailabilityZone"`
	AvailabilityZoneRelocation       *bool                       `queryParam:"style=form,explode=true,name=AvailabilityZoneRelocation"`
	ClusterIdentifier                string                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	ClusterParameterGroupName        *string                     `queryParam:"style=form,explode=true,name=ClusterParameterGroupName"`
	ClusterSecurityGroups            []string                    `queryParam:"style=form,explode=true,name=ClusterSecurityGroups"`
	ClusterType                      *string                     `queryParam:"style=form,explode=true,name=ClusterType"`
	ClusterVersion                   *string                     `queryParam:"style=form,explode=true,name=ClusterVersion"`
	ElasticIP                        *string                     `queryParam:"style=form,explode=true,name=ElasticIp"`
	Encrypted                        *bool                       `queryParam:"style=form,explode=true,name=Encrypted"`
	EnhancedVpcRouting               *bool                       `queryParam:"style=form,explode=true,name=EnhancedVpcRouting"`
	HsmClientCertificateIdentifier   *string                     `queryParam:"style=form,explode=true,name=HsmClientCertificateIdentifier"`
	HsmConfigurationIdentifier       *string                     `queryParam:"style=form,explode=true,name=HsmConfigurationIdentifier"`
	KmsKeyID                         *string                     `queryParam:"style=form,explode=true,name=KmsKeyId"`
	MaintenanceTrackName             *string                     `queryParam:"style=form,explode=true,name=MaintenanceTrackName"`
	ManualSnapshotRetentionPeriod    *int64                      `queryParam:"style=form,explode=true,name=ManualSnapshotRetentionPeriod"`
	MasterUserPassword               *string                     `queryParam:"style=form,explode=true,name=MasterUserPassword"`
	NewClusterIdentifier             *string                     `queryParam:"style=form,explode=true,name=NewClusterIdentifier"`
	NodeType                         *string                     `queryParam:"style=form,explode=true,name=NodeType"`
	NumberOfNodes                    *int64                      `queryParam:"style=form,explode=true,name=NumberOfNodes"`
	Port                             *int64                      `queryParam:"style=form,explode=true,name=Port"`
	PreferredMaintenanceWindow       *string                     `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
	PubliclyAccessible               *bool                       `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
	Version                          GetModifyClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcSecurityGroupIds              []string                    `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
}

type GetModifyClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyClusterRequest struct {
	QueryParams GetModifyClusterQueryParams
	Headers     GetModifyClusterHeaders
}

type GetModifyClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
