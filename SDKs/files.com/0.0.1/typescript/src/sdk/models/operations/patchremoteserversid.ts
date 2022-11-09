import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchRemoteServersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum {
    Personal = "personal"
,    BusinessOther = "business_other"
}

export enum PatchRemoteServersIdRequestBodyServerCertificateEnum {
    RequireMatch = "require_match"
,    AllowAny = "allow_any"
}

export enum PatchRemoteServersIdRequestBodyServerTypeEnum {
    Ftp = "ftp"
,    Sftp = "sftp"
,    S3 = "s3"
,    GoogleCloudStorage = "google_cloud_storage"
,    Webdav = "webdav"
,    Wasabi = "wasabi"
,    BackblazeB2 = "backblaze_b2"
,    OneDrive = "one_drive"
,    Rackspace = "rackspace"
,    Box = "box"
,    Dropbox = "dropbox"
,    GoogleDrive = "google_drive"
,    Azure = "azure"
,    Sharepoint = "sharepoint"
,    S3Compatible = "s3_compatible"
}

export enum PatchRemoteServersIdRequestBodySslEnum {
    IfAvailable = "if_available"
,    Require = "require"
,    RequireImplicit = "require_implicit"
,    Never = "never"
}


export class PatchRemoteServersIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=aws_access_key" })
  awsAccessKey?: string;

  @Metadata({ data: "multipart_form, name=aws_secret_key" })
  awsSecretKey?: string;

  @Metadata({ data: "multipart_form, name=azure_blob_storage_access_key" })
  azureBlobStorageAccessKey?: string;

  @Metadata({ data: "multipart_form, name=azure_blob_storage_account" })
  azureBlobStorageAccount?: string;

  @Metadata({ data: "multipart_form, name=azure_blob_storage_container" })
  azureBlobStorageContainer?: string;

  @Metadata({ data: "multipart_form, name=backblaze_b2_application_key" })
  backblazeB2ApplicationKey?: string;

  @Metadata({ data: "multipart_form, name=backblaze_b2_bucket" })
  backblazeB2Bucket?: string;

  @Metadata({ data: "multipart_form, name=backblaze_b2_key_id" })
  backblazeB2KeyId?: string;

  @Metadata({ data: "multipart_form, name=backblaze_b2_s3_endpoint" })
  backblazeB2S3Endpoint?: string;

  @Metadata({ data: "multipart_form, name=enable_dedicated_ips" })
  enableDedicatedIps?: boolean;

  @Metadata({ data: "multipart_form, name=google_cloud_storage_bucket" })
  googleCloudStorageBucket?: string;

  @Metadata({ data: "multipart_form, name=google_cloud_storage_credentials_json" })
  googleCloudStorageCredentialsJson?: string;

  @Metadata({ data: "multipart_form, name=google_cloud_storage_project_id" })
  googleCloudStorageProjectId?: string;

  @Metadata({ data: "multipart_form, name=hostname" })
  hostname?: string;

  @Metadata({ data: "multipart_form, name=max_connections" })
  maxConnections?: number;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=one_drive_account_type" })
  oneDriveAccountType?: PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum;

  @Metadata({ data: "multipart_form, name=password" })
  password?: string;

  @Metadata({ data: "multipart_form, name=port" })
  port?: number;

  @Metadata({ data: "multipart_form, name=private_key" })
  privateKey?: string;

  @Metadata({ data: "multipart_form, name=rackspace_api_key" })
  rackspaceApiKey?: string;

  @Metadata({ data: "multipart_form, name=rackspace_container" })
  rackspaceContainer?: string;

  @Metadata({ data: "multipart_form, name=rackspace_region" })
  rackspaceRegion?: string;

  @Metadata({ data: "multipart_form, name=rackspace_username" })
  rackspaceUsername?: string;

  @Metadata({ data: "multipart_form, name=reset_authentication" })
  resetAuthentication?: boolean;

  @Metadata({ data: "multipart_form, name=s3_bucket" })
  s3Bucket?: string;

  @Metadata({ data: "multipart_form, name=s3_compatible_access_key" })
  s3CompatibleAccessKey?: string;

  @Metadata({ data: "multipart_form, name=s3_compatible_bucket" })
  s3CompatibleBucket?: string;

  @Metadata({ data: "multipart_form, name=s3_compatible_endpoint" })
  s3CompatibleEndpoint?: string;

  @Metadata({ data: "multipart_form, name=s3_compatible_region" })
  s3CompatibleRegion?: string;

  @Metadata({ data: "multipart_form, name=s3_compatible_secret_key" })
  s3CompatibleSecretKey?: string;

  @Metadata({ data: "multipart_form, name=s3_region" })
  s3Region?: string;

  @Metadata({ data: "multipart_form, name=server_certificate" })
  serverCertificate?: PatchRemoteServersIdRequestBodyServerCertificateEnum;

  @Metadata({ data: "multipart_form, name=server_host_key" })
  serverHostKey?: string;

  @Metadata({ data: "multipart_form, name=server_type" })
  serverType?: PatchRemoteServersIdRequestBodyServerTypeEnum;

  @Metadata({ data: "multipart_form, name=ssl" })
  ssl?: PatchRemoteServersIdRequestBodySslEnum;

  @Metadata({ data: "multipart_form, name=ssl_certificate" })
  sslCertificate?: string;

  @Metadata({ data: "multipart_form, name=username" })
  username?: string;

  @Metadata({ data: "multipart_form, name=wasabi_access_key" })
  wasabiAccessKey?: string;

  @Metadata({ data: "multipart_form, name=wasabi_bucket" })
  wasabiBucket?: string;

  @Metadata({ data: "multipart_form, name=wasabi_region" })
  wasabiRegion?: string;

  @Metadata({ data: "multipart_form, name=wasabi_secret_key" })
  wasabiSecretKey?: string;
}


export class PatchRemoteServersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchRemoteServersIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchRemoteServersIdRequestBody;
}


export class PatchRemoteServersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  remoteServerEntity?: shared.RemoteServerEntity;

  @Metadata()
  statusCode: number;
}
