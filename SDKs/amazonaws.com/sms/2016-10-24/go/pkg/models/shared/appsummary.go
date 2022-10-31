package shared

import (
"time")

type AppSummary struct {
    AppID *string `json:"appId,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    ImportedAppID *string `json:"importedAppId,omitempty"`
    LastModified *time.Time `json:"lastModified,omitempty"`
    LatestReplicationTime *time.Time `json:"latestReplicationTime,omitempty"`
    LaunchConfigurationStatus *AppLaunchConfigurationStatusEnum `json:"launchConfigurationStatus,omitempty"`
    LaunchDetails *LaunchDetails `json:"launchDetails,omitempty"`
    LaunchStatus *AppLaunchStatusEnum `json:"launchStatus,omitempty"`
    LaunchStatusMessage *string `json:"launchStatusMessage,omitempty"`
    Name *string `json:"name,omitempty"`
    ReplicationConfigurationStatus *AppReplicationConfigurationStatusEnum `json:"replicationConfigurationStatus,omitempty"`
    ReplicationStatus *AppReplicationStatusEnum `json:"replicationStatus,omitempty"`
    ReplicationStatusMessage *string `json:"replicationStatusMessage,omitempty"`
    RoleName *string `json:"roleName,omitempty"`
    Status *AppStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    TotalServerGroups *int64 `json:"totalServerGroups,omitempty"`
    TotalServers *int64 `json:"totalServers,omitempty"`
    
}

