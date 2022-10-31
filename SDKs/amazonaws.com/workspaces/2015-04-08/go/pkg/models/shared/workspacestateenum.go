package shared




type WorkspaceStateEnum string

const (
    WorkspaceStateEnumPending WorkspaceStateEnum = "PENDING"
WorkspaceStateEnumAvailable WorkspaceStateEnum = "AVAILABLE"
WorkspaceStateEnumImpaired WorkspaceStateEnum = "IMPAIRED"
WorkspaceStateEnumUnhealthy WorkspaceStateEnum = "UNHEALTHY"
WorkspaceStateEnumRebooting WorkspaceStateEnum = "REBOOTING"
WorkspaceStateEnumStarting WorkspaceStateEnum = "STARTING"
WorkspaceStateEnumRebuilding WorkspaceStateEnum = "REBUILDING"
WorkspaceStateEnumRestoring WorkspaceStateEnum = "RESTORING"
WorkspaceStateEnumMaintenance WorkspaceStateEnum = "MAINTENANCE"
WorkspaceStateEnumAdminMaintenance WorkspaceStateEnum = "ADMIN_MAINTENANCE"
WorkspaceStateEnumTerminating WorkspaceStateEnum = "TERMINATING"
WorkspaceStateEnumTerminated WorkspaceStateEnum = "TERMINATED"
WorkspaceStateEnumSuspended WorkspaceStateEnum = "SUSPENDED"
WorkspaceStateEnumUpdating WorkspaceStateEnum = "UPDATING"
WorkspaceStateEnumStopping WorkspaceStateEnum = "STOPPING"
WorkspaceStateEnumStopped WorkspaceStateEnum = "STOPPED"
WorkspaceStateEnumError WorkspaceStateEnum = "ERROR"
)


