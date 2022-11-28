package shared

// AwsRedshiftClusterDeferredMaintenanceWindow
// A time windows during which maintenance was deferred for an Amazon Redshift cluster.
type AwsRedshiftClusterDeferredMaintenanceWindow struct {
	DeferMaintenanceEndTime    *string `json:"DeferMaintenanceEndTime,omitempty"`
	DeferMaintenanceIdentifier *string `json:"DeferMaintenanceIdentifier,omitempty"`
	DeferMaintenanceStartTime  *string `json:"DeferMaintenanceStartTime,omitempty"`
}
