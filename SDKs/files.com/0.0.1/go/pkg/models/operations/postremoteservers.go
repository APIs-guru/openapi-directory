package operations

import (
	"openapi/pkg/models/shared"
)

type PostRemoteServersRequestBodyOneDriveAccountTypeEnum string

const (
	PostRemoteServersRequestBodyOneDriveAccountTypeEnumPersonal      PostRemoteServersRequestBodyOneDriveAccountTypeEnum = "personal"
	PostRemoteServersRequestBodyOneDriveAccountTypeEnumBusinessOther PostRemoteServersRequestBodyOneDriveAccountTypeEnum = "business_other"
)

type PostRemoteServersRequestBodyServerCertificateEnum string

const (
	PostRemoteServersRequestBodyServerCertificateEnumRequireMatch PostRemoteServersRequestBodyServerCertificateEnum = "require_match"
	PostRemoteServersRequestBodyServerCertificateEnumAllowAny     PostRemoteServersRequestBodyServerCertificateEnum = "allow_any"
)

type PostRemoteServersRequestBodyServerTypeEnum string

const (
	PostRemoteServersRequestBodyServerTypeEnumFtp                PostRemoteServersRequestBodyServerTypeEnum = "ftp"
	PostRemoteServersRequestBodyServerTypeEnumSftp               PostRemoteServersRequestBodyServerTypeEnum = "sftp"
	PostRemoteServersRequestBodyServerTypeEnumS3                 PostRemoteServersRequestBodyServerTypeEnum = "s3"
	PostRemoteServersRequestBodyServerTypeEnumGoogleCloudStorage PostRemoteServersRequestBodyServerTypeEnum = "google_cloud_storage"
	PostRemoteServersRequestBodyServerTypeEnumWebdav             PostRemoteServersRequestBodyServerTypeEnum = "webdav"
	PostRemoteServersRequestBodyServerTypeEnumWasabi             PostRemoteServersRequestBodyServerTypeEnum = "wasabi"
	PostRemoteServersRequestBodyServerTypeEnumBackblazeB2        PostRemoteServersRequestBodyServerTypeEnum = "backblaze_b2"
	PostRemoteServersRequestBodyServerTypeEnumOneDrive           PostRemoteServersRequestBodyServerTypeEnum = "one_drive"
	PostRemoteServersRequestBodyServerTypeEnumRackspace          PostRemoteServersRequestBodyServerTypeEnum = "rackspace"
	PostRemoteServersRequestBodyServerTypeEnumBox                PostRemoteServersRequestBodyServerTypeEnum = "box"
	PostRemoteServersRequestBodyServerTypeEnumDropbox            PostRemoteServersRequestBodyServerTypeEnum = "dropbox"
	PostRemoteServersRequestBodyServerTypeEnumGoogleDrive        PostRemoteServersRequestBodyServerTypeEnum = "google_drive"
	PostRemoteServersRequestBodyServerTypeEnumAzure              PostRemoteServersRequestBodyServerTypeEnum = "azure"
	PostRemoteServersRequestBodyServerTypeEnumSharepoint         PostRemoteServersRequestBodyServerTypeEnum = "sharepoint"
	PostRemoteServersRequestBodyServerTypeEnumS3Compatible       PostRemoteServersRequestBodyServerTypeEnum = "s3_compatible"
)

type PostRemoteServersRequestBodySslEnum string

const (
	PostRemoteServersRequestBodySslEnumIfAvailable     PostRemoteServersRequestBodySslEnum = "if_available"
	PostRemoteServersRequestBodySslEnumRequire         PostRemoteServersRequestBodySslEnum = "require"
	PostRemoteServersRequestBodySslEnumRequireImplicit PostRemoteServersRequestBodySslEnum = "require_implicit"
	PostRemoteServersRequestBodySslEnumNever           PostRemoteServersRequestBodySslEnum = "never"
)

type PostRemoteServersRequestBody struct {
	AwsAccessKey                      *string                                              `multipartForm:"name=aws_access_key"`
	AwsSecretKey                      *string                                              `multipartForm:"name=aws_secret_key"`
	AzureBlobStorageAccessKey         *string                                              `multipartForm:"name=azure_blob_storage_access_key"`
	AzureBlobStorageAccount           *string                                              `multipartForm:"name=azure_blob_storage_account"`
	AzureBlobStorageContainer         *string                                              `multipartForm:"name=azure_blob_storage_container"`
	BackblazeB2ApplicationKey         *string                                              `multipartForm:"name=backblaze_b2_application_key"`
	BackblazeB2Bucket                 *string                                              `multipartForm:"name=backblaze_b2_bucket"`
	BackblazeB2KeyID                  *string                                              `multipartForm:"name=backblaze_b2_key_id"`
	BackblazeB2S3Endpoint             *string                                              `multipartForm:"name=backblaze_b2_s3_endpoint"`
	EnableDedicatedIps                *bool                                                `multipartForm:"name=enable_dedicated_ips"`
	GoogleCloudStorageBucket          *string                                              `multipartForm:"name=google_cloud_storage_bucket"`
	GoogleCloudStorageCredentialsJSON *string                                              `multipartForm:"name=google_cloud_storage_credentials_json"`
	GoogleCloudStorageProjectID       *string                                              `multipartForm:"name=google_cloud_storage_project_id"`
	Hostname                          *string                                              `multipartForm:"name=hostname"`
	MaxConnections                    *int32                                               `multipartForm:"name=max_connections"`
	Name                              *string                                              `multipartForm:"name=name"`
	OneDriveAccountType               *PostRemoteServersRequestBodyOneDriveAccountTypeEnum `multipartForm:"name=one_drive_account_type"`
	Password                          *string                                              `multipartForm:"name=password"`
	Port                              *int32                                               `multipartForm:"name=port"`
	PrivateKey                        *string                                              `multipartForm:"name=private_key"`
	RackspaceAPIKey                   *string                                              `multipartForm:"name=rackspace_api_key"`
	RackspaceContainer                *string                                              `multipartForm:"name=rackspace_container"`
	RackspaceRegion                   *string                                              `multipartForm:"name=rackspace_region"`
	RackspaceUsername                 *string                                              `multipartForm:"name=rackspace_username"`
	ResetAuthentication               *bool                                                `multipartForm:"name=reset_authentication"`
	S3Bucket                          *string                                              `multipartForm:"name=s3_bucket"`
	S3CompatibleAccessKey             *string                                              `multipartForm:"name=s3_compatible_access_key"`
	S3CompatibleBucket                *string                                              `multipartForm:"name=s3_compatible_bucket"`
	S3CompatibleEndpoint              *string                                              `multipartForm:"name=s3_compatible_endpoint"`
	S3CompatibleRegion                *string                                              `multipartForm:"name=s3_compatible_region"`
	S3CompatibleSecretKey             *string                                              `multipartForm:"name=s3_compatible_secret_key"`
	S3Region                          *string                                              `multipartForm:"name=s3_region"`
	ServerCertificate                 *PostRemoteServersRequestBodyServerCertificateEnum   `multipartForm:"name=server_certificate"`
	ServerHostKey                     *string                                              `multipartForm:"name=server_host_key"`
	ServerType                        *PostRemoteServersRequestBodyServerTypeEnum          `multipartForm:"name=server_type"`
	Ssl                               *PostRemoteServersRequestBodySslEnum                 `multipartForm:"name=ssl"`
	SslCertificate                    *string                                              `multipartForm:"name=ssl_certificate"`
	Username                          *string                                              `multipartForm:"name=username"`
	WasabiAccessKey                   *string                                              `multipartForm:"name=wasabi_access_key"`
	WasabiBucket                      *string                                              `multipartForm:"name=wasabi_bucket"`
	WasabiRegion                      *string                                              `multipartForm:"name=wasabi_region"`
	WasabiSecretKey                   *string                                              `multipartForm:"name=wasabi_secret_key"`
}

type PostRemoteServersRequest struct {
	Request *PostRemoteServersRequestBody `request:"mediaType=multipart/form-data"`
}

type PostRemoteServersResponse struct {
	ContentType        string
	RemoteServerEntity *shared.RemoteServerEntity
	StatusCode         int64
}
