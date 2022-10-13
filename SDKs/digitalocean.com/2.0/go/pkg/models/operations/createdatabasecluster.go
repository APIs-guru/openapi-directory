package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateDatabaseClusterRequestBodyBackupRestore struct {
	BackupCreatedAt *time.Time `json:"backup_created_at"`
	DatabaseName    string     `json:"database_name"`
}

type CreateDatabaseClusterRequestBodyConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type CreateDatabaseClusterRequestBodyEngineEnum string

const (
	CreateDatabaseClusterRequestBodyEngineEnumPg      CreateDatabaseClusterRequestBodyEngineEnum = "pg"
	CreateDatabaseClusterRequestBodyEngineEnumMysql   CreateDatabaseClusterRequestBodyEngineEnum = "mysql"
	CreateDatabaseClusterRequestBodyEngineEnumRedis   CreateDatabaseClusterRequestBodyEngineEnum = "redis"
	CreateDatabaseClusterRequestBodyEngineEnumMongodb CreateDatabaseClusterRequestBodyEngineEnum = "mongodb"
)

type CreateDatabaseClusterRequestBodyMaintenanceWindow struct {
	Day         string   `json:"day"`
	Description []string `json:"description"`
	Hour        string   `json:"hour"`
	Pending     *bool    `json:"pending"`
}

type CreateDatabaseClusterRequestBodyPrivateConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type CreateDatabaseClusterRequestBodyStatusEnum string

const (
	CreateDatabaseClusterRequestBodyStatusEnumCreating  CreateDatabaseClusterRequestBodyStatusEnum = "creating"
	CreateDatabaseClusterRequestBodyStatusEnumOnline    CreateDatabaseClusterRequestBodyStatusEnum = "online"
	CreateDatabaseClusterRequestBodyStatusEnumResizing  CreateDatabaseClusterRequestBodyStatusEnum = "resizing"
	CreateDatabaseClusterRequestBodyStatusEnumMigrating CreateDatabaseClusterRequestBodyStatusEnum = "migrating"
	CreateDatabaseClusterRequestBodyStatusEnumForking   CreateDatabaseClusterRequestBodyStatusEnum = "forking"
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
	CreateDatabaseClusterRequestBodyUsersRoleEnumNormal  CreateDatabaseClusterRequestBodyUsersRoleEnum = "normal"
)

type CreateDatabaseClusterRequestBodyUsers struct {
	MysqlSettings *CreateDatabaseClusterRequestBodyUsersMysqlSettings `json:"mysql_settings"`
	Name          string                                              `json:"name"`
	Password      *string                                             `json:"password"`
	Role          *CreateDatabaseClusterRequestBodyUsersRoleEnum      `json:"role"`
}

type CreateDatabaseClusterRequestBody struct {
	BackupRestore      *CreateDatabaseClusterRequestBodyBackupRestore     `json:"backup_restore"`
	Connection         *CreateDatabaseClusterRequestBodyConnection        `json:"connection"`
	CreatedAt          *time.Time                                         `json:"created_at"`
	DbNames            []string                                           `json:"db_names"`
	Engine             CreateDatabaseClusterRequestBodyEngineEnum         `json:"engine"`
	ID                 *string                                            `json:"id"`
	MaintenanceWindow  *CreateDatabaseClusterRequestBodyMaintenanceWindow `json:"maintenance_window"`
	Name               string                                             `json:"name"`
	NumNodes           int64                                              `json:"num_nodes"`
	PrivateConnection  *CreateDatabaseClusterRequestBodyPrivateConnection `json:"private_connection"`
	PrivateNetworkUUID *string                                            `json:"private_network_uuid"`
	Region             string                                             `json:"region"`
	Size               string                                             `json:"size"`
	Status             *CreateDatabaseClusterRequestBodyStatusEnum        `json:"status"`
	Tags               []string                                           `json:"tags"`
	Users              []CreateDatabaseClusterRequestBodyUsers            `json:"users"`
	Version            *string                                            `json:"version"`
}

type CreateDatabaseClusterRequest struct {
	Request CreateDatabaseClusterRequestBody `request:"mediaType=application/json"`
}

type CreateDatabaseCluster201ApplicationJSON struct {
	Database shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems `json:"database"`
}

type CreateDatabaseCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateDatabaseClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateDatabaseCluster201ApplicationJSONObject             *CreateDatabaseCluster201ApplicationJSON
	CreateDatabaseCluster401ApplicationJSONObject             *CreateDatabaseCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
