package shared

type RemoteServerEntityAuthStatusEnum string

const (
	RemoteServerEntityAuthStatusEnumNotApplicable  RemoteServerEntityAuthStatusEnum = "not_applicable"
	RemoteServerEntityAuthStatusEnumInSetup        RemoteServerEntityAuthStatusEnum = "in_setup"
	RemoteServerEntityAuthStatusEnumComplete       RemoteServerEntityAuthStatusEnum = "complete"
	RemoteServerEntityAuthStatusEnumReauthenticate RemoteServerEntityAuthStatusEnum = "reauthenticate"
)

type RemoteServerEntityOneDriveAccountTypeEnum string

const (
	RemoteServerEntityOneDriveAccountTypeEnumPersonal      RemoteServerEntityOneDriveAccountTypeEnum = "personal"
	RemoteServerEntityOneDriveAccountTypeEnumBusinessOther RemoteServerEntityOneDriveAccountTypeEnum = "business_other"
)

type RemoteServerEntityServerCertificateEnum string

const (
	RemoteServerEntityServerCertificateEnumRequireMatch RemoteServerEntityServerCertificateEnum = "require_match"
	RemoteServerEntityServerCertificateEnumAllowAny     RemoteServerEntityServerCertificateEnum = "allow_any"
)

type RemoteServerEntityServerTypeEnum string

const (
	RemoteServerEntityServerTypeEnumFtp                RemoteServerEntityServerTypeEnum = "ftp"
	RemoteServerEntityServerTypeEnumSftp               RemoteServerEntityServerTypeEnum = "sftp"
	RemoteServerEntityServerTypeEnumS3                 RemoteServerEntityServerTypeEnum = "s3"
	RemoteServerEntityServerTypeEnumGoogleCloudStorage RemoteServerEntityServerTypeEnum = "google_cloud_storage"
	RemoteServerEntityServerTypeEnumWebdav             RemoteServerEntityServerTypeEnum = "webdav"
	RemoteServerEntityServerTypeEnumWasabi             RemoteServerEntityServerTypeEnum = "wasabi"
	RemoteServerEntityServerTypeEnumBackblazeB2        RemoteServerEntityServerTypeEnum = "backblaze_b2"
	RemoteServerEntityServerTypeEnumOneDrive           RemoteServerEntityServerTypeEnum = "one_drive"
	RemoteServerEntityServerTypeEnumRackspace          RemoteServerEntityServerTypeEnum = "rackspace"
	RemoteServerEntityServerTypeEnumBox                RemoteServerEntityServerTypeEnum = "box"
	RemoteServerEntityServerTypeEnumDropbox            RemoteServerEntityServerTypeEnum = "dropbox"
	RemoteServerEntityServerTypeEnumGoogleDrive        RemoteServerEntityServerTypeEnum = "google_drive"
	RemoteServerEntityServerTypeEnumAzure              RemoteServerEntityServerTypeEnum = "azure"
	RemoteServerEntityServerTypeEnumSharepoint         RemoteServerEntityServerTypeEnum = "sharepoint"
	RemoteServerEntityServerTypeEnumS3Compatible       RemoteServerEntityServerTypeEnum = "s3_compatible"
)

type RemoteServerEntitySslEnum string

const (
	RemoteServerEntitySslEnumIfAvailable     RemoteServerEntitySslEnum = "if_available"
	RemoteServerEntitySslEnumRequire         RemoteServerEntitySslEnum = "require"
	RemoteServerEntitySslEnumRequireImplicit RemoteServerEntitySslEnum = "require_implicit"
	RemoteServerEntitySslEnumNever           RemoteServerEntitySslEnum = "never"
)

// RemoteServerEntity
// Create Remote Server
type RemoteServerEntity struct {
	AuthAccountName             *string                                    `json:"auth_account_name,omitempty"`
	AuthSetupLink               *string                                    `json:"auth_setup_link,omitempty"`
	AuthStatus                  *RemoteServerEntityAuthStatusEnum          `json:"auth_status,omitempty"`
	AuthenticationMethod        *string                                    `json:"authentication_method,omitempty"`
	AzureBlobStorageAccount     *string                                    `json:"azure_blob_storage_account,omitempty"`
	AzureBlobStorageContainer   *string                                    `json:"azure_blob_storage_container,omitempty"`
	BackblazeB2Bucket           *string                                    `json:"backblaze_b2_bucket,omitempty"`
	BackblazeB2S3Endpoint       *string                                    `json:"backblaze_b2_s3_endpoint,omitempty"`
	EnableDedicatedIps          *bool                                      `json:"enable_dedicated_ips,omitempty"`
	GoogleCloudStorageBucket    *string                                    `json:"google_cloud_storage_bucket,omitempty"`
	GoogleCloudStorageProjectID *string                                    `json:"google_cloud_storage_project_id,omitempty"`
	Hostname                    *string                                    `json:"hostname,omitempty"`
	ID                          *int32                                     `json:"id,omitempty"`
	MaxConnections              *int32                                     `json:"max_connections,omitempty"`
	Name                        *string                                    `json:"name,omitempty"`
	OneDriveAccountType         *RemoteServerEntityOneDriveAccountTypeEnum `json:"one_drive_account_type,omitempty"`
	Port                        *int32                                     `json:"port,omitempty"`
	RackspaceContainer          *string                                    `json:"rackspace_container,omitempty"`
	RackspaceRegion             *string                                    `json:"rackspace_region,omitempty"`
	RackspaceUsername           *string                                    `json:"rackspace_username,omitempty"`
	RemoteHomePath              *string                                    `json:"remote_home_path,omitempty"`
	S3Bucket                    *string                                    `json:"s3_bucket,omitempty"`
	S3CompatibleBucket          *string                                    `json:"s3_compatible_bucket,omitempty"`
	S3CompatibleEndpoint        *string                                    `json:"s3_compatible_endpoint,omitempty"`
	S3CompatibleRegion          *string                                    `json:"s3_compatible_region,omitempty"`
	S3Region                    *string                                    `json:"s3_region,omitempty"`
	ServerCertificate           *RemoteServerEntityServerCertificateEnum   `json:"server_certificate,omitempty"`
	ServerHostKey               *string                                    `json:"server_host_key,omitempty"`
	ServerType                  *RemoteServerEntityServerTypeEnum          `json:"server_type,omitempty"`
	Ssl                         *RemoteServerEntitySslEnum                 `json:"ssl,omitempty"`
	Username                    *string                                    `json:"username,omitempty"`
	WasabiBucket                *string                                    `json:"wasabi_bucket,omitempty"`
	WasabiRegion                *string                                    `json:"wasabi_region,omitempty"`
}
