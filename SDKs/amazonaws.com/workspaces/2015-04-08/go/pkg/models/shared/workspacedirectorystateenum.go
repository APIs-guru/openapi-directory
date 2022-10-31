package shared




type WorkspaceDirectoryStateEnum string

const (
    WorkspaceDirectoryStateEnumRegistering WorkspaceDirectoryStateEnum = "REGISTERING"
WorkspaceDirectoryStateEnumRegistered WorkspaceDirectoryStateEnum = "REGISTERED"
WorkspaceDirectoryStateEnumDeregistering WorkspaceDirectoryStateEnum = "DEREGISTERING"
WorkspaceDirectoryStateEnumDeregistered WorkspaceDirectoryStateEnum = "DEREGISTERED"
WorkspaceDirectoryStateEnumError WorkspaceDirectoryStateEnum = "ERROR"
)


