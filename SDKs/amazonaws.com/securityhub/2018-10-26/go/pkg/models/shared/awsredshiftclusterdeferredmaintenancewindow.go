package shared

type AwsRedshiftClusterDeferredMaintenanceWindow struct {
	DeferMaintenanceEndTime    *string `json:"DeferMaintenanceEndTime"`
	DeferMaintenanceIdentifier *string `json:"DeferMaintenanceIdentifier"`
	DeferMaintenanceStartTime  *string `json:"DeferMaintenanceStartTime"`
}
