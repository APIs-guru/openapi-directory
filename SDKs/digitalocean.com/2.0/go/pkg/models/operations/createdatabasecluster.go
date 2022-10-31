package operations

import (
"time"
"openapi/pkg/models/shared")

type CreateDatabaseClusterRequestBodyBackupRestore struct {
    BackupCreatedAt *time.Time `json:"backup_created_at,omitempty"`
    DatabaseName string `json:"database_name"`
    
}

type CreateDatabaseClusterRequestBodyConnection struct {
    Database *string `json:"database,omitempty"`
    Host *string `json:"host,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Ssl *bool `json:"ssl,omitempty"`
    URI *string `json:"uri,omitempty"`
    User *string `json:"user,omitempty"`
    
}


type CreateDatabaseClusterRequestBodyEngineEnum string

const (
    CreateDatabaseClusterRequestBodyEngineEnumPg CreateDatabaseClusterRequestBodyEngineEnum = "pg"
CreateDatabaseClusterRequestBodyEngineEnumMysql CreateDatabaseClusterRequestBodyEngineEnum = "mysql"
CreateDatabaseClusterRequestBodyEngineEnumRedis CreateDatabaseClusterRequestBodyEngineEnum = "redis"
CreateDatabaseClusterRequestBodyEngineEnumMongodb CreateDatabaseClusterRequestBodyEngineEnum = "mongodb"
)


type CreateDatabaseClusterRequestBodyMaintenanceWindow struct {
    Day string `json:"day"`
    Description []string `json:"description,omitempty"`
    Hour string `json:"hour"`
    Pending *bool `json:"pending,omitempty"`
    
}

type CreateDatabaseClusterRequestBodyPrivateConnection struct {
    Database *string `json:"database,omitempty"`
    Host *string `json:"host,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Ssl *bool `json:"ssl,omitempty"`
    URI *string `json:"uri,omitempty"`
    User *string `json:"user,omitempty"`
    
}


type CreateDatabaseClusterRequestBodyStatusEnum string

const (
    CreateDatabaseClusterRequestBodyStatusEnumCreating CreateDatabaseClusterRequestBodyStatusEnum = "creating"
CreateDatabaseClusterRequestBodyStatusEnumOnline CreateDatabaseClusterRequestBodyStatusEnum = "online"
CreateDatabaseClusterRequestBodyStatusEnumResizing CreateDatabaseClusterRequestBodyStatusEnum = "resizing"
CreateDatabaseClusterRequestBodyStatusEnumMigrating CreateDatabaseClusterRequestBodyStatusEnum = "migrating"
CreateDatabaseClusterRequestBodyStatusEnumForking CreateDatabaseClusterRequestBodyStatusEnum = "forking"
)



type CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum string

const (
    CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnumMysqlNativePassword CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum = "mysql_native_password"
CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnumCachingSha2Password CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum = "caching_sha2_password"
)


type CreateDatabaseClusterRequestBodyUsersMysqlSettings struct {
    AuthPlugin CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum `json:"auth_plugin"`
    
}


type CreateDatabaseClusterRequestBodyUsersRoleEnum string

const (
    CreateDatabaseClusterRequestBodyUsersRoleEnumPrimary CreateDatabaseClusterRequestBodyUsersRoleEnum = "primary"
CreateDatabaseClusterRequestBodyUsersRoleEnumNormal CreateDatabaseClusterRequestBodyUsersRoleEnum = "normal"
)


type CreateDatabaseClusterRequestBodyUsers struct {
    MysqlSettings *CreateDatabaseClusterRequestBodyUsersMysqlSettings `json:"mysql_settings,omitempty"`
    Name string `json:"name"`
    Password *string `json:"password,omitempty"`
    Role *CreateDatabaseClusterRequestBodyUsersRoleEnum `json:"role,omitempty"`
    
}

type CreateDatabaseClusterRequestBody struct {
    BackupRestore *CreateDatabaseClusterRequestBodyBackupRestore `json:"backup_restore,omitempty"`
    Connection *CreateDatabaseClusterRequestBodyConnection `json:"connection,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DbNames []string `json:"db_names,omitempty"`
    Engine CreateDatabaseClusterRequestBodyEngineEnum `json:"engine"`
    ID *string `json:"id,omitempty"`
    MaintenanceWindow *CreateDatabaseClusterRequestBodyMaintenanceWindow `json:"maintenance_window,omitempty"`
    Name string `json:"name"`
    NumNodes int64 `json:"num_nodes"`
    PrivateConnection *CreateDatabaseClusterRequestBodyPrivateConnection `json:"private_connection,omitempty"`
    PrivateNetworkUUID *string `json:"private_network_uuid,omitempty"`
    Region string `json:"region"`
    Size string `json:"size"`
    Status *CreateDatabaseClusterRequestBodyStatusEnum `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Users []CreateDatabaseClusterRequestBodyUsers `json:"users,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

type CreateDatabaseClusterRequest struct {
    Request CreateDatabaseClusterRequestBody `request:"mediaType=application/json"`
    
}

type CreateDatabaseCluster201ApplicationJSON struct {
    Database shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems `json:"database"`
    
}

type CreateDatabaseCluster401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateDatabaseClusterResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateDatabaseCluster201ApplicationJSONObject *CreateDatabaseCluster201ApplicationJSON 
    CreateDatabaseCluster401ApplicationJSONObject *CreateDatabaseCluster401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

