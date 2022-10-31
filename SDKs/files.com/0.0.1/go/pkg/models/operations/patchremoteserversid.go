package operations

import (
	"openapi/pkg/models/shared"
)

type PatchRemoteServersIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnum string

const (
	PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnumPersonal      PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnum = "personal"
	PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnumBusinessOther PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnum = "business_other"
)

type PatchRemoteServersIDRequestBodyServerCertificateEnum string

const (
	PatchRemoteServersIDRequestBodyServerCertificateEnumRequireMatch PatchRemoteServersIDRequestBodyServerCertificateEnum = "require_match"
	PatchRemoteServersIDRequestBodyServerCertificateEnumAllowAny     PatchRemoteServersIDRequestBodyServerCertificateEnum = "allow_any"
)

type PatchRemoteServersIDRequestBodyServerTypeEnum string

const (
	PatchRemoteServersIDRequestBodyServerTypeEnumFtp                PatchRemoteServersIDRequestBodyServerTypeEnum = "ftp"
	PatchRemoteServersIDRequestBodyServerTypeEnumSftp               PatchRemoteServersIDRequestBodyServerTypeEnum = "sftp"
	PatchRemoteServersIDRequestBodyServerTypeEnumS3                 PatchRemoteServersIDRequestBodyServerTypeEnum = "s3"
	PatchRemoteServersIDRequestBodyServerTypeEnumGoogleCloudStorage PatchRemoteServersIDRequestBodyServerTypeEnum = "google_cloud_storage"
	PatchRemoteServersIDRequestBodyServerTypeEnumWebdav             PatchRemoteServersIDRequestBodyServerTypeEnum = "webdav"
	PatchRemoteServersIDRequestBodyServerTypeEnumWasabi             PatchRemoteServersIDRequestBodyServerTypeEnum = "wasabi"
	PatchRemoteServersIDRequestBodyServerTypeEnumBackblazeB2        PatchRemoteServersIDRequestBodyServerTypeEnum = "backblaze_b2"
	PatchRemoteServersIDRequestBodyServerTypeEnumOneDrive           PatchRemoteServersIDRequestBodyServerTypeEnum = "one_drive"
	PatchRemoteServersIDRequestBodyServerTypeEnumRackspace          PatchRemoteServersIDRequestBodyServerTypeEnum = "rackspace"
	PatchRemoteServersIDRequestBodyServerTypeEnumBox                PatchRemoteServersIDRequestBodyServerTypeEnum = "box"
	PatchRemoteServersIDRequestBodyServerTypeEnumDropbox            PatchRemoteServersIDRequestBodyServerTypeEnum = "dropbox"
	PatchRemoteServersIDRequestBodyServerTypeEnumGoogleDrive        PatchRemoteServersIDRequestBodyServerTypeEnum = "google_drive"
	PatchRemoteServersIDRequestBodyServerTypeEnumAzure              PatchRemoteServersIDRequestBodyServerTypeEnum = "azure"
	PatchRemoteServersIDRequestBodyServerTypeEnumSharepoint         PatchRemoteServersIDRequestBodyServerTypeEnum = "sharepoint"
	PatchRemoteServersIDRequestBodyServerTypeEnumS3Compatible       PatchRemoteServersIDRequestBodyServerTypeEnum = "s3_compatible"
)

type PatchRemoteServersIDRequestBodySslEnum string

const (
	PatchRemoteServersIDRequestBodySslEnumIfAvailable     PatchRemoteServersIDRequestBodySslEnum = "if_available"
	PatchRemoteServersIDRequestBodySslEnumRequire         PatchRemoteServersIDRequestBodySslEnum = "require"
	PatchRemoteServersIDRequestBodySslEnumRequireImplicit PatchRemoteServersIDRequestBodySslEnum = "require_implicit"
	PatchRemoteServersIDRequestBodySslEnumNever           PatchRemoteServersIDRequestBodySslEnum = "never"
)

type PatchRemoteServersIDRequestBody struct {
	AwsAccessKey                      *string                                                 `multipartForm:"name=aws_access_key"`
	AwsSecretKey                      *string                                                 `multipartForm:"name=aws_secret_key"`
	AzureBlobStorageAccessKey         *string                                                 `multipartForm:"name=azure_blob_storage_access_key"`
	AzureBlobStorageAccount           *string                                                 `multipartForm:"name=azure_blob_storage_account"`
	AzureBlobStorageContainer         *string                                                 `multipartForm:"name=azure_blob_storage_container"`
	BackblazeB2ApplicationKey         *string                                                 `multipartForm:"name=backblaze_b2_application_key"`
	BackblazeB2Bucket                 *string                                                 `multipartForm:"name=backblaze_b2_bucket"`
	BackblazeB2KeyID                  *string                                                 `multipartForm:"name=backblaze_b2_key_id"`
	BackblazeB2S3Endpoint             *string                                                 `multipartForm:"name=backblaze_b2_s3_endpoint"`
	EnableDedicatedIps                *bool                                                   `multipartForm:"name=enable_dedicated_ips"`
	GoogleCloudStorageBucket          *string                                                 `multipartForm:"name=google_cloud_storage_bucket"`
	GoogleCloudStorageCredentialsJSON *string                                                 `multipartForm:"name=google_cloud_storage_credentials_json"`
	GoogleCloudStorageProjectID       *string                                                 `multipartForm:"name=google_cloud_storage_project_id"`
	Hostname                          *string                                                 `multipartForm:"name=hostname"`
	MaxConnections                    *int32                                                  `multipartForm:"name=max_connections"`
	Name                              *string                                                 `multipartForm:"name=name"`
	OneDriveAccountType               *PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnum `multipartForm:"name=one_drive_account_type"`
	Password                          *string                                                 `multipartForm:"name=password"`
	Port                              *int32                                                  `multipartForm:"name=port"`
	PrivateKey                        *string                                                 `multipartForm:"name=private_key"`
	RackspaceAPIKey                   *string                                                 `multipartForm:"name=rackspace_api_key"`
	RackspaceContainer                *string                                                 `multipartForm:"name=rackspace_container"`
	RackspaceRegion                   *string                                                 `multipartForm:"name=rackspace_region"`
	RackspaceUsername                 *string                                                 `multipartForm:"name=rackspace_username"`
	ResetAuthentication               *bool                                                   `multipartForm:"name=reset_authentication"`
	S3Bucket                          *string                                                 `multipartForm:"name=s3_bucket"`
	S3CompatibleAccessKey             *string                                                 `multipartForm:"name=s3_compatible_access_key"`
	S3CompatibleBucket                *string                                                 `multipartForm:"name=s3_compatible_bucket"`
	S3CompatibleEndpoint              *string                                                 `multipartForm:"name=s3_compatible_endpoint"`
	S3CompatibleRegion                *string                                                 `multipartForm:"name=s3_compatible_region"`
	S3CompatibleSecretKey             *string                                                 `multipartForm:"name=s3_compatible_secret_key"`
	S3Region                          *string                                                 `multipartForm:"name=s3_region"`
	ServerCertificate                 *PatchRemoteServersIDRequestBodyServerCertificateEnum   `multipartForm:"name=server_certificate"`
	ServerHostKey                     *string                                                 `multipartForm:"name=server_host_key"`
	ServerType                        *PatchRemoteServersIDRequestBodyServerTypeEnum          `multipartForm:"name=server_type"`
	Ssl                               *PatchRemoteServersIDRequestBodySslEnum                 `multipartForm:"name=ssl"`
	SslCertificate                    *string                                                 `multipartForm:"name=ssl_certificate"`
	Username                          *string                                                 `multipartForm:"name=username"`
	WasabiAccessKey                   *string                                                 `multipartForm:"name=wasabi_access_key"`
	WasabiBucket                      *string                                                 `multipartForm:"name=wasabi_bucket"`
	WasabiRegion                      *string                                                 `multipartForm:"name=wasabi_region"`
	WasabiSecretKey                   *string                                                 `multipartForm:"name=wasabi_secret_key"`
}

type PatchRemoteServersIDRequest struct {
	PathParams PatchRemoteServersIDPathParams
	Request    *PatchRemoteServersIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchRemoteServersIDResponse struct {
	ContentType        string
	RemoteServerEntity *shared.RemoteServerEntity
	StatusCode         int64
}
