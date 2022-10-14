package shared

import (
	"time"
)

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection struct {
	Database *string `json:"database,omitempty"`
	Host     *string `json:"host,omitempty"`
	Password *string `json:"password,omitempty"`
	Port     *int64  `json:"port,omitempty"`
	Ssl      *bool   `json:"ssl,omitempty"`
	URI      *string `json:"uri,omitempty"`
	User     *string `json:"user,omitempty"`
}

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum string

const (
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnumPg      Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = "pg"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnumMysql   Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = "mysql"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnumRedis   Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = "redis"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnumMongodb Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = "mongodb"
)

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow struct {
	Day         string   `json:"day"`
	Description []string `json:"description,omitempty"`
	Hour        string   `json:"hour"`
	Pending     *bool    `json:"pending,omitempty"`
}

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection struct {
	Database *string `json:"database,omitempty"`
	Host     *string `json:"host,omitempty"`
	Password *string `json:"password,omitempty"`
	Port     *int64  `json:"port,omitempty"`
	Ssl      *bool   `json:"ssl,omitempty"`
	URI      *string `json:"uri,omitempty"`
	User     *string `json:"user,omitempty"`
}

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum string

const (
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnumCreating  Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = "creating"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnumOnline    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = "online"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnumResizing  Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = "resizing"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnumMigrating Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = "migrating"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnumForking   Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = "forking"
)

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum string

const (
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnumMysqlNativePassword Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum = "mysql_native_password"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnumCachingSha2Password Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum = "caching_sha2_password"
)

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings struct {
	AuthPlugin Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum `json:"auth_plugin"`
}

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum string

const (
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnumPrimary Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum = "primary"
	Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnumNormal  Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum = "normal"
)

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers struct {
	MysqlSettings *Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings `json:"mysql_settings,omitempty"`
	Name          string                                                                                                 `json:"name"`
	Password      *string                                                                                                `json:"password,omitempty"`
	Role          *Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum      `json:"role,omitempty"`
}

type Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems struct {
	Connection         *Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection        `json:"connection,omitempty"`
	CreatedAt          *time.Time                                                                                            `json:"created_at,omitempty"`
	DbNames            []string                                                                                              `json:"db_names,omitempty"`
	Engine             Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum         `json:"engine"`
	ID                 *string                                                                                               `json:"id,omitempty"`
	MaintenanceWindow  *Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow `json:"maintenance_window,omitempty"`
	Name               string                                                                                                `json:"name"`
	NumNodes           int64                                                                                                 `json:"num_nodes"`
	PrivateConnection  *Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection `json:"private_connection,omitempty"`
	PrivateNetworkUUID *string                                                                                               `json:"private_network_uuid,omitempty"`
	Region             string                                                                                                `json:"region"`
	Size               string                                                                                                `json:"size"`
	Status             *Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum        `json:"status,omitempty"`
	Tags               []string                                                                                              `json:"tags,omitempty"`
	Users              []Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers            `json:"users,omitempty"`
	Version            *string                                                                                               `json:"version,omitempty"`
}
