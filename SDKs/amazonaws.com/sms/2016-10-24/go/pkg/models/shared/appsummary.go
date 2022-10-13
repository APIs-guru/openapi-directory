package shared

import (
	"time"
)

type AppSummary struct {
	AppID                          *string                                `json:"appId"`
	CreationTime                   *time.Time                             `json:"creationTime"`
	Description                    *string                                `json:"description"`
	ImportedAppID                  *string                                `json:"importedAppId"`
	LastModified                   *time.Time                             `json:"lastModified"`
	LatestReplicationTime          *time.Time                             `json:"latestReplicationTime"`
	LaunchConfigurationStatus      *AppLaunchConfigurationStatusEnum      `json:"launchConfigurationStatus"`
	LaunchDetails                  *LaunchDetails                         `json:"launchDetails"`
	LaunchStatus                   *AppLaunchStatusEnum                   `json:"launchStatus"`
	LaunchStatusMessage            *string                                `json:"launchStatusMessage"`
	Name                           *string                                `json:"name"`
	ReplicationConfigurationStatus *AppReplicationConfigurationStatusEnum `json:"replicationConfigurationStatus"`
	ReplicationStatus              *AppReplicationStatusEnum              `json:"replicationStatus"`
	ReplicationStatusMessage       *string                                `json:"replicationStatusMessage"`
	RoleName                       *string                                `json:"roleName"`
	Status                         *AppStatusEnum                         `json:"status"`
	StatusMessage                  *string                                `json:"statusMessage"`
	TotalServerGroups              *int64                                 `json:"totalServerGroups"`
	TotalServers                   *int64                                 `json:"totalServers"`
}
